import  React, { Component } from 'react';

import { user } from '../userinfo.json';


class Friend extends Component {

    constructor() {
        super();
        this.state = {
            user
        }
    }

    render() {
        this.state.user.friends.map((friends, i) => {
            return (
                <div className="card">
                    {friends.name}
                </div>
            )
        })

    }
}

export default Friend;