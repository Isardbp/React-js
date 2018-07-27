import React, { Component } from 'react';
import  ReactDOM  from 'react-dom'
import info_card from '../info_card.json';



class Card_json extends Component {

  constructor(){
   super();
   this.state = {
     info_card
   }
  }

  render(){
    const mss = this.state.info_card.mss.map((mss, i) =>{
      return(
        <div className="card">
          <div className="card-header">{mss.name}</div>
        <div className="class-body">{mss.text}</div>
        </div>
      )
    });
    function foo(props) {
    const mss_var =
      <div>
        {mss}
      </div>

      ReactDOM.render(
        mss_var,
        document.getElementById('test')
      );
    }

    return(
      <div className="container">
        <button onClick={foo}>ClickMee</button>
      <div id="test"></div>
      </div>
    );
  }
}


export default Card_json;
