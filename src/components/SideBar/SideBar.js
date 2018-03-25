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
    <div className="yearlyInfoWrapper is-primary">
      <h2 className="yearlyHeading">Did you know?</h2>
      <p>For selected trip, you will consume (yearly):</p>
      <ul className="sideBarList">
        <li>$ {trip.costYearly}</li>
        <li>{(trip.timeYearly / 1440).toFixed(1)} days</li>
        <li>{trip.environmentYearly} grams of CO2</li>
        <li>{trip.healthYearly} calories</li>
      </ul>
      <button class="button is-success is-fullwidth knowMore">Want to know more?</button>
    </div>
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
