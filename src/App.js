import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SideBar from 'components/SideBar/SideBar';
import configureStore from 'store/configureStore';
import './App.css';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App columns">
          <SideBar />
          <div className="column">Content</div>
        </div>
      </Provider>
    );
  }
}

export default App;
