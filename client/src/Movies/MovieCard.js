import React from 'react';
import './movies.css';


const MovieCard = (props) => {
    
  let id = props.match.params.id;

  if (!props.movies[id]) {
    return <div>Loading movie information...</div>
  }

    return (
      <div className='movie-card'>
          <button onClick={ () => {return props.addSave(props.movies[id])}}>Add to Your Saved Movies</button>
          <div className='movie-director'><strong>Movie:</strong> {props.movies[id].title} </div> 
          <div className='movie-metascore'><strong>Metascore:</strong> {props.movies[id].metascore} </div> 
          <div className='movie-director'><strong>Director:</strong> {props.movies[id].director} </div> 
          <div><strong>Movie:</strong> {props.movies[id].title} </div> 
          <div><strong>Actors:</strong> </div>
          {props.movies[id].stars.map(star => <li className='movie-star'>{star}</li>)}
      </div>
      );
}

  export default MovieCard;

