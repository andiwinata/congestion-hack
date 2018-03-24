import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SideBar from 'components/SideBar/SideBar';
import Map from 'components/Map/Map';
import configureStore from 'store/configureStore';
import './App.css';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App columns">
          <aside className="sidebar column is-2">
            <SideBar />
          </aside>
          <div className="column mapWrapper">
            <Map />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
