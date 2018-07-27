import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { user } from './userinfo.json';

import Navigation from './components/Navigation';
import  LeftDiv from './components/LeftDiv';
import Cards from './components/Card';
import RigthDiv from './components/RightDiv';
import Music_albums from './components/Music_albums';

class App extends Component {

    constructor(){
        super();
        this.state = {
            user
        }
    }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <header>
            <Navigation />
          </header>
          <section className="container mw-100">
              <div className="row">
              <div className="col-2"><LeftDiv /></div>
            <div className="col-7"><Music_albums /></div>
              <div className="col-3"><RigthDiv /></div>
              </div>
          </section>
      </div>
    );
  }
}

export default App;
