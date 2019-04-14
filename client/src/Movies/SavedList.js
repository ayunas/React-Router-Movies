import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './movies.css';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  render() {
    console.log(this.props.list);
    return (
        <div className="saved-list">
          <h3>Saved Movies:</h3>
         <div>
            <Link to='/'><button className="home-button">Home</button></Link>
         </div>
          <div className='movies'>
          {this.props.list.map(savedMovie => <Link to={`/movies/${savedMovie.id}`}>{savedMovie.title}</Link>)}
          {/* {this.props.list !== undefined ? <div>{this.props.list[0].title}</div> : <div>no data</div>} */}
           {/* {this.props.list && <div>{this.props.list[0].title}</div>} */}
           {/* {this.props.list[0].title && <div>{this.props.list[0].title}</div>} */}
{/*   
            { this.props.list.map( savedMovie => { <Link 
            to={`/movies/${savedMovie.id}`} /> 
            <span className="saved-movie">{movie.title}</span>
            </Link> }
            )} */}
          </div>
          
        </div>
    );
  }
}
