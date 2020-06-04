import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard'
import Store from './Store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Store>
          <Dashboard/>
        </Store>
      </div>
    );
  }
}

export default App;
