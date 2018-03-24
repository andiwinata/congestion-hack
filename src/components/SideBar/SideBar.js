import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import TripForm from 'components/TripForm/TripForm';
import ResultChart from 'components/ResultChart/ResultChart';
import mockData from 'mockResult/mock.json';
import './SideBar.css';

const getYearlyCost = mapUrl => {
  if (!mapUrl) {
    return null;
  }

  const trip = mockData.find(data => data.url === mapUrl);
  if (!trip) {
    return null;
  }
  return (
    <React.Fragment>
      <h4>Each year, you will consume in total:</h4>
      <ul>
        <li>Money: ${(trip.costYearly).toFixed(2)}</li>
        <li>Time: {(trip.timeYearly / 1440).toFixed(1)} days</li>
        <li>CO2: {trip.environmentYearly} grams</li>
        <li>Calories: {trip.healthYearly} calories</li>
      </ul>
    </React.Fragment>
  );
};

const SideBar = ({ mapUrl }) => (
  <React.Fragment>
    <TripForm />
    <ResultChart />
    {getYearlyCost(mapUrl)}
  </React.Fragment>
);

const mapStateToProps = ({ map: { url } }) => ({ mapUrl: url });

const enhance = compose(connect(mapStateToProps));

export default enhance(SideBar);
