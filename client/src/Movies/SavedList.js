import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './movies.css';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  render() {
    console.log(this.props);
    return (
        <div id='nav' className="saved-list">
           
         <div className='savedMovies'>
            <h3>Saved Movies:</h3>
            <Link to='/'><button className="home-button">Home</button></Link>
            <Link to='/'><button className="home-button" onClick={ ()=> this.props.removeAll()}>Remove All</button></Link>
         </div>
          <div className='movies'>
            {this.props.list.map(savedMovie => <Link className='saved-movie' to={`/movies/${savedMovie.id}`}>{savedMovie.title}</Link>)}
          </div>
        </div>
    );
  }
}
