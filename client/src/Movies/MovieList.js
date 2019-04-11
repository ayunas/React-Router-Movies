import React, { Component } from 'react';
import './movies.css';
import MovieDetails from './MovieDetails';

const MovieList = props => {
    return (
      <div className="movie-list">
        {props.movies.map( movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }

  export default MovieList;
