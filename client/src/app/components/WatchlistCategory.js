import React from 'react';
import '../stylesheets/watchlistCategory.css';
import remove_movie_ic from '../images/remove_movie_ic.png';
import noposter from '../images/noposter.jpg';
import axios from 'axios';

class WatchlistCategory extends React.Component {

  constructor() {
    super();

    this.removeMovie = this.removeMovie.bind(this);
  }

  fetchMovieDetails(movieId, type) {
    let url = '';
  }

  removeMovie(event) {
    event.preventDefault();
    let data = this.props.meta;
    axios.post('api/remove', {
      id: data.id,
      movieid: data.movieid,
      title: data.title
    }).catch(error => {
      console.log(error);
    });
    window.location.reload();
  }

  render() {

    let data = this.props.meta;
    let id = data.movieid,
        release = data.release,
        title = data.title,
        type = data.type,
        poster = 'https://image.tmdb.org/t/p/w500' + data.poster,
        addDate = data.addDate;

    if(data.poster == null) {
      poster = noposter;
    }

    return (
      <div className="categoryContainer">
        <div className="containerBackground">
          <img className="containerImage" src={poster} alt={title} />
          <div className="info">
            <div className="title">{title}</div>
            <div className="release">Release: {release}</div>
            <div className="buttonHolder">
              <input className="revMovieBtn" onClick={this.removeMovie} type="image" src={remove_movie_ic} alt="revBtn"/>
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default WatchlistCategory;
