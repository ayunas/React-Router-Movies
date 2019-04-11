import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';

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
    axios .get(`http://localhost:5000/api/movies/`)
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  };

  addToSavedList = movie => {
    console.log(movie);
    const savedList = this.state.savedList;
    if (!savedList.includes(movie)) {
      savedList.push(movie);
    }
    this.setState({ savedList });
  };

  render() {
    return (
        <div>
          <SavedList list={this.state.savedList} />
          <Route path='/' exact render={ (props) => <MovieList {...props} movies={this.state.movies} /> } />
          <Route path='/movies/:id' render={ (props) => <MovieCard {...props} movies={this.state.movies} addSave={this.addToSavedList} /> } />
        </div>
    );
  }
}

export default App;
