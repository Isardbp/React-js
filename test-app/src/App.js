import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { user } from './userinfo.json';

<<<<<<< HEAD
import Navigation from './components/Navigation';
import  LeftDiv from './components/LeftDiv';
import Cards from './components/Card';
import Write from './components/Write';
import RigthDiv from './components/RightDiv';
=======
import Navigation from './components/Navigation'
import  LeftDiv from './components/LeftDiv'
import Cards from './components/Card'
import RigthDiv from './components/RightDiv'
>>>>>>> 38f30a912e5bcbaf253fc2e660fb5bfd8e7113d5


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
                  <Cards />
<<<<<<< HEAD
                  <div className="col-3"><RigthDiv /></div>
=======
                  <div className="col-3"> <RigthDiv /> </div>
>>>>>>> 38f30a912e5bcbaf253fc2e660fb5bfd8e7113d5
              </div>
          </section>
      </div>
    );
  }
}

export default App;
