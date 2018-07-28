import React, { Component } from 'react';
import { all } from '../userinfo.json';

const foo = all.music[0].discs[0];

class Music_albums extends Component {

  render(){

    var songs = foo.songs.map((songs) => {
      return(
            <tr>
              <th scope="row">{songs.num}</th>
              <td>{songs.name}</td>
            <td>{songs.time}</td>
            </tr>
      )
    });

    var album = (
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
