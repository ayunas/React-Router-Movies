import React from 'react';
import MovieDetails from './MovieDetails';

const MovieCard = (props) => {
  
  let id = props.match.params.id;

  if (!props.movies[id]) {
    return <div>Loading movie information...</div>
  }

  
  // console.log(props);
  console.log(id);
  console.log(props.movies[id].title);
  
  // console.log(props.movies[id].title);

        return <div>Movie: {props.movies[id].title} </div> 
    // return <div>Movie: {props.movies[id].title} </div>;
  }

  export default MovieCard;


// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className="movie-card">
//       <Link to={`/movies/${movie.id}`}><button><h2>{title}</h2></button></Link>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//   );
// }


