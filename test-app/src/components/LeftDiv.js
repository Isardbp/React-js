import React, { Component } from 'react';

import {all} from "../userinfo.json";

class LeftDiv extends Component {

    constructor() {
        super();
        this.state = {
            all
        }
    }

    render(){
        return (
            <div className="card">
                <img className="card-img-top" src={require("../perfil.jpg")} alt="Card img cap" />
                <div className="card-body">
                    <h5 className="card-title"> {this.state.all.me.name} </h5>
                    <p className="card-text"> {this.state.all.me.description} </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        )
    }
}

export default LeftDiv;