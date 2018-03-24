import React from 'react';
import TripForm from 'components/TripForm/TripForm';
import ResultChart from 'components/ResultChart/ResultChart';
import './SideBar.css';

const SideBar = () => (
  <React.Fragment>
    <TripForm />
    <ResultChart />
  </React.Fragment>
);

export default SideBar;
