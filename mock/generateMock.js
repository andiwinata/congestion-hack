const axios = require('axios');
const fs = require('fs');
const path = require('path');

const min = 50;
const max = 100;

const mockFilePath = path.join(__dirname, '../src/mockResult/mock.json');

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const apiResults = [require('./sydney_strathfield.json')];
const apiResults = [require('./car.json'), require('./mix_car_public.json'), require('./public_transport.json')];

const getFlatSaveURLsObj = apiResult => {
  const saveURLsObj = apiResult.groups.map(group => {
    return group.trips.map(trip => {
      const cost = trip.moneyCost;
      const time = Math.round((trip.arrive - trip.depart) / 60);
      const environment = trip.environment;
      const health = trip.caloriesCost;
      const yearly = 480;

      return {
        saveURL: trip.saveURL,
        cost,
        costYearly: trip.moneyCost * yearly,
        time,
        timeYearly: time * yearly,
        environment,
        environmentYearly: environment * yearly,
        health,
        healthYearly: health * yearly,
      };
    });
  });
  // flatten the array
  const flatSaveURLsObj = [].concat.apply([], saveURLsObj);
  return flatSaveURLsObj;
};

// fetch the real trip url
const getFinalObject = async flatSaveURLsObj => {
  const promises = flatSaveURLsObj.map(obj => {
    return axios.get(obj.saveURL).then(x => x.data);
  });

  const results = await Promise.all(promises);
  const final = results.map((result, i) => {
    return Object.assign({}, flatSaveURLsObj[i], {
      url: result.url,
      name: result.url,
    });
  });

  return final;
};

const run = async () => {
  const flatSaveUrlsObjects = apiResults.map(getFlatSaveURLsObj);
  const finalObjects = await Promise.all(flatSaveUrlsObjects.map(getFinalObject));

  const concatenatedFinal = [].concat.apply([], finalObjects);

  // writing the file
  fs.writeFile(mockFilePath, JSON.stringify(concatenatedFinal, null, 2), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
};

run();
