import React from 'react';
import { Link } from 'react-router-dom';

function MovieDetails({ movie }) {
    const { title, director, metascore, stars } = movie;
    
    return (
      <div className="movie-card">
        <Link to={`/movies/${movie.id}`}><button><h2>{title}</h2></button></Link>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
  
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    );
  }

export default MovieDetails;