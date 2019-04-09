import React from 'react';
import axios from 'axios';


class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() { 

    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios 
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>
    }
    
    return (
        <div className="movie-list">
          {this.state.movies.map( movie => (
            <MovieDetails key={movie.id} movie={movie} />
          ))}
        </div>
    );
  }
}

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

export default MovieCard;
