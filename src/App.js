import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CarCostChart from 'components/CarCostChart/CarCostChart'
import SideBar from 'components/SideBar/SideBar';
import Map from 'components/Map/Map';
import configureStore from 'store/configureStore';
import heatMapImage from 'asset/heatMap.png';
import './App.css';

const MainPage = () => (
  <div className="App columns">
    <aside className="sidebar column is-4">
      <SideBar />
    </aside>
    <div className="column mapWrapper">
      <Map />
    </div>
  </div>
);

const SecondPage = () => (
  <div>
    <CarCostChart />
    <img src={heatMapImage} alt="heatmap" />
  </div>
)

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/second" component={SecondPage} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
