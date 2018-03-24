import React from 'react';
import TripForm from 'components/TripForm/TripForm';
import ResultChart from 'components/ResultChart/ResultChart';
import './SideBar.css';

const SideBar = () => (
  <aside className="column is-4 wrapper">
    <TripForm />
    <ResultChart />
  </aside>
);

export default SideBar;
