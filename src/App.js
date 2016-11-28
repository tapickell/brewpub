import React, { Component } from 'react';
import './App.css';
import Title from './Title'

class App extends Component {
  render() {
    return (
        <div>
          <Title />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
    );
  }
}

export default App;
