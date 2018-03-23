import React, { Component } from 'react';
import SideBar from 'components/SideBar/SideBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App columns">
        <SideBar />
        <div className="column">Content</div>
      </div>
    );
  }
}

export default App;
