import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Page from './components/conditional_operator'
import Card_json from './components/card_json_info'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <body>
          <Card_json />
        </body>
      </div>
    );
  }
}

export default App;
