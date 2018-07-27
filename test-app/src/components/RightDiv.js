import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {all} from "../userinfo.json";

class RightDiv extends Component{

    constructor() {
    super();
    this.state = {all};
    }

    render(){
        /*---Valores predefinido---*/
        window.onload = friends_altern;
        /*------*/
    const friends = this.state.all.contacts.map((contacts, i) => {
            return (
                <div className="card mb-2" id={contacts.id}>
                    <div className="card-header text-left">
                    {contacts.name}
                    </div>
                </div>
            )
        });

    const music = this.state.all.music.map((music, i) => {
        return (
            <div className="card mb-2">
                <div className="card-header text-left">
                {music.name}
                </div>
            </div>
        )
    });

    function music_altern(){
        document.getElementById('music').classList.add("active");
        document.getElementById('friends').classList.remove("active");
        ReactDOM.render(
            music,
            document.getElementById('altern_div')
        );
    }

    function friends_altern(){
        document.getElementById('friends').classList.add("active");
        document.getElementById('music').classList.remove("active");
        ReactDOM.render(
            friends,
            document.getElementById('altern_div')
        );
    }

        return (
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item w-50">
                            <a className="nav-link active" id="friends" onClick={friends_altern}>Friends</a>
                        </li>
                        <li className="nav-item w-50">
                            <a className="nav-link" id="music" onClick={music_altern}>Music</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body" id="altern_div"></div>
            </div>
        )
    }
}

export default RightDiv
