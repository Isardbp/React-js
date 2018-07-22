import React, { Component } from 'react';

import {user} from "../userinfo.json";


class RightDiv extends Component{

    constructor() {
    super();
    this.state = {
        user
    }
    }

    render(){

    const friends = this.state.user.friends.map((friends, i) => {
            return (
                <div className="card mb-2">
                    <div className="card-header text-left">
                    {friends.name}
                    </div>
                </div>
            )
        });

        return (
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item w-50">
                            <a className="nav-link active" href="#">Friends</a>
                        </li>
                        <li className="nav-item w-50">
                            <a className="nav-link" href="#">Music</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    {friends}
                </div>
            </div>
        )
    }
}



export  default  RightDiv;