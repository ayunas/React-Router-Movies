import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to='/'><button className="home-button">Home</button></Link>
        <div className="saved-list">
          <h3>Saved Movies:</h3>
          {this.props.list.map(movie => (
            <span className="saved-movie">{movie.title}</span>
          ))}
        </div>
      </div>
    );
  }
}
