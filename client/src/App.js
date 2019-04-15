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
    console.log('addToSavedList triggered');
    console.log(movie.id,movie.title);

    // console.log(this.state.savedList);

    const savedList = this.state.savedList;

    if (!savedList.includes(movie)) {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  removeFromSavedList = movie => {
    console.log('removeSave has been triggered');
    console.log(movie.id,movie.title);
    console.log('saved movie list: ', this.state.savedList);

    let remove = this.state.savedList.filter( savedMovie => savedMovie.title !== movie.title )

    console.log(remove);

    // for (let i = 0; i < this.state.savedList.length; i++) {
    //   if (movie.title === this.state.savedList[i].title)
    // }

    // let list = this.state.savedList;
    // list.splice((movie.id),1);
    // console.log(list);

    this.setState({
      savedList : remove
    })
  }

 removeAll = () => {

    this.setState({
      savedList : []
    })

 }


  render() {
    // console.log(this.state.savedList);
    return (
        <div>
          <SavedList list={this.state.savedList} 
          movies={this.state.movies} 
          removeSave={this.removeFromSavedList}
          removeAll={this.removeAll}
          />
          <Route path='/' exact render={ (props) => <MovieList {...props} movies={this.state.movies} /> } />
          <Route path='/movies/:id' render={ (props) => <MovieCard {...props} movies={this.state.movies} addSave={this.addToSavedList} 
          removeSave={this.removeFromSavedList}/> } />
        </div>
    );
  }
}

export default App;
