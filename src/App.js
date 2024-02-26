import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>          
        </header>
        <p className="App-info">
            Edit <code>src/App.js</code> and save to reload updated by Mojidul.
        </p>
      </div>
    );
  }
}

export default App;
