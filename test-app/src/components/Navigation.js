import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return (
                <ul className="nav justify-content-center bg-light">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Friends</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Write</a>
                    </li>
                </ul>
        )
    }
}

export  default  Navigation;