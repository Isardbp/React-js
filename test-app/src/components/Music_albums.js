import React, { Component } from 'react';
import { all } from '../userinfo.json';


class Music_albums extends Component {

  constructor(){
    super();
    this.state = {
      all
    }
  }

  render(){

    const songs = this.state.all.music[0].discs[0].songs.map((songs, i) => {
      return(
            <tr>
              <th scope="row">{songs.num}</th>
              <td>{songs.name}</td>
            <td>{songs.time}</td>
            </tr>
      )
    });

    const album = (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Name </th>
            <th scope="col"> Time </th>
          </tr>
        </thead>
        <tbody>
          {songs}
        </tbody>
      </table>
    )

    return(
      <div>
        {album}
      </div>
    )
  }
}

export default Music_albums;
