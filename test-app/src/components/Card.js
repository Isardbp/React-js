import React, { Component } from 'react';

import {all} from "../userinfo.json";

import  {id_contact_onclick} from './RightDiv';


const card_decision_const = id_contact_onclick();

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


class Card_someone extends Component{

    constructor(){
        // noinspection JSAnnotator
        super();
        this.state = {
            all
        }
    }

    render(){
        const card = this.state.all.contacts[card_decision_const].cards.map((cards, i) => {
            return (
                <div className="card w-100 text-left mb-3">
                    <div className="card-header">
                        {all.contacts[card_decision_const].name}
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


class Card_decision extends Component{
    render(){
        if(card_decision_const){
            return(<Card_someone/>)
        }
        else{
            return(<Card_me/>)
        }
    }
}

class Cards extends Component {

    render(){
        return(
            <div className="col-7" id="center_div">
                <div className="container">
                    <div className="row mb-4">
                        <Card_decision/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;