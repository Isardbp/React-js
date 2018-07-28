import React, { Component } from 'react';

import {all} from "../userinfo.json";


class Cards extends Component {

    constructor(){

        super();
        this.state = {
            all
        }
    }

    render(){

        const card = this.state.all.me.cards.map((cards, i) => {
            return (
                <div className="card w-100 text-left mb-3">
                    <div className="card-header">
                        {all.me.name}
                        <a href="#" className="btn btn-primary float-right">Delete</a>
                        <a href="#" className="btn btn-primary float-right mr-1">Edit</a>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{cards.text}</p>
                    </div>
                </div>
            )
        });

        return(
                <div className="container">

                    <div className="row mb-4">
                        {card}
                    </div>
                </div>
        )
    }
}

export default Cards;
