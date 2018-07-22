import React, { Component } from 'react';

class Card extends Component {
    render(){
        return(
            <div className="card w-100 text-left mb-3">
                <div className="card-header">
                    Featured
                    <a href="#" className="btn btn-primary float-right">Delete</a>
                    <a href="#" className="btn btn-primary float-right mr-1">Edit</a>
                </div>
                <div className="card-body">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer"></div>
            </div>
        )
    }
}

export default Card;