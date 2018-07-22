import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { user } from './userinfo.json';

import Navigation from './components/Navigation'
import  LeftDiv from './components/LeftDiv'
import Card from './components/Card'
import RigthDiv from './components/RightDiv'


class App extends Component {

    constructor(){
        super();
        this.state = {
            user
        }
    }

  render() {
        console.log(this.state.user.friends[1].name);
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <header>
            <Navigation />
          </header>
          <section className="container mw-100">
              <div className="row">
              <div className="col-2"><LeftDiv /></div>
                  <div className="col-7" id="center_div">
                        <div className="container">
                            <div className="row mb-4">
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                  </div>
                  <div className="col-3"> <RigthDiv /> </div>
              </div>
          </section>
      </div>
    );
  }
}

export default App;
