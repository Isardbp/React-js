import React, { Component } from 'react';

import {all} from "../userinfo.json";


class Card_me extends Component{

    constructor(){
        // noinspection JSAnnotator
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
        return(card)
    }
}


class Cards extends Component {

    render(){
        return(
            <div className="col-7" id="center_div">
                <div className="container">
                    <div className="row mb-4">
                        <Card_me />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
