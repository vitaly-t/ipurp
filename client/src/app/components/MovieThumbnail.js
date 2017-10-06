import React from 'react';
import axios from 'axios';
import add_movie_ic from '../images/add_movie_ic.png';
import remove_movie_ic from '../images/remove_movie_ic.png';
import noposter from '../images/noposter.jpg';

class MovieThumbnail extends React.Component {

  constructor() {
    super();

    this.data = [];
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(event) {
    event.preventDefault();
    let data = this.props.meta;
    console.log(data);
    axios.post('/api/movie/add', {
      id: data.movieId,
      title: data.movieTitle,
      release: data.movieReleaseDate,
      type: data.type
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    let data = this.props.meta;

    let movieTitle = data.movieTitle,
        movieVoteCount = data.movieVoteCount,
        movieVoteAverage = data.movieVoteAverage,
        movieOriginalTitle = data.movieOriginalTitle,
        movieOverview = data.movieOverview,
        movieReleaseDate = data.movieReleaseDate,
        moviePoster = 'https://image.tmdb.org/t/p/w500' + data.moviePoster,
        movieBackdrop = 'https://image.tmdb.org/t/p/original' + data.movieBackdrop;

    if(movieOverview.length === "") {
      movieOverview = "this movie doesn´t have any overview";
    }

    if(movieReleaseDate === "") {
      movieReleaseDate = "--:--:--";
    }

    if(data.moviePoster == null) {
      moviePoster = noposter;
    }

    return (
      <div className="movieWrapper">
        <div className="movieThumbNail">
          <img className="moviePoster" src={moviePoster} alt={movieTitle} />
          <div className="movieTemp">
            <div className="movieTitle" >{movieTitle}</div>
            <div className="movieReleaseDate">Release: {movieReleaseDate}</div>
            <div className="movieOverView">
              <span className="overview">{movieOverview}</span>
            </div>
            <div className="buttonHolder">
              <input className="addMovieBtn" onClick={this.addMovie} type="image" src={add_movie_ic} alt="addBtn"/>
              <input className="revMovieBtn" type="image" src={remove_movie_ic} alt="revBtn"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps(props) {
    this.data = props.meta;
  }
}

export default MovieThumbnail;
