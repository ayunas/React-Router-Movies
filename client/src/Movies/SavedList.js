import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.movies[0]);
    // console.log(this.props.list);
    return (
        <div className="saved-list">
          <h3>Saved Movies:</h3>
          {this.props.list.map( movie => { console.log(movie); return <Link to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></Link> } 
          )}
          <Link to='/'><button className="home-button">Home</button></Link>
        </div>
    );
  }
}
