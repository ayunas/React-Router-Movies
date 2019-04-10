import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';
import {withRouter} from 'react-router-dom';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      movies: []
    };
  }

  componentDidMount() { 
    // const id = this.props.match.params.id;
    const id = this.state.match;
    this.fetchMovie(id);
  }

  fetchMovie = () => {
    axios 
      .get(`http://localhost:5000/api/movies/`)
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  };

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
        <div>
          <SavedList list={this.state.savedList} />
          <Route path='/' exact render={ (props) => <MovieList {...props} movies={this.state.movies} /> } />
          <Route path='/movies/:id' render={ (props) => <MovieCard {...props} movies={this.state.movies} /> } />
        </div>
    );
  }
}

export default App;
