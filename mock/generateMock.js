const axios = require('axios');
const apiResult = require('./sydney_strathfield.json');
const fs = require('fs');

const min = 50;
const max = 100;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const saveURLsObj = apiResult.groups.map(group => {
  return group.trips.map(trip => ({
    x: randomIntFromInterval(min, max),
    y: randomIntFromInterval(min, max),
    saveURL: trip.saveURL,
  }));
});

// flatten the array
const flatSaveURLsObj = [].concat.apply([], saveURLsObj);

// fetch the real trip url

const fetchTripUrl = async () => {
  const promises = flatSaveURLsObj.map(obj => {
    return axios.get(obj.saveURL).then(x => x.data);
  });

  const results = await Promise.all(promises);
  const final = results.map((result, i) => {
    return Object.assign({}, flatSaveURLsObj[i], { url: result.url });
  });

  // writing the file
  fs.writeFile(path.join(__dirname, 'mock/mock.json'), JSON.stringify(final, null, 2), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
};

fetchTripUrl();
