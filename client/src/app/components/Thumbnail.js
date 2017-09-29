import React from 'react';
import ReactDOM from 'react-dom';
import add_movie_ic from '../images/add_movie_ic.png';
import remove_movie_ic from '../images/remove_movie_ic.png';

class ThumbNail extends React.Component {

  constructor() {
    super();

    this.data = [];
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(event) {
    event.preventDefault();
    let data = this.props.meta;
    let movie = {
      title: data.movieTitle,
      release: data.movieReleaseDate,
      overview: data.movieOverview,
      poster: 'https://image.tmdb.org/t/p/w500' + data.moviePoster
    }
    const request = new Request('http://localhost:3000/movies/add', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(movie)
    });

    fetch(request)
      .then( (res) => {
        res.json()
          .then( (data) => {
            console.log(data)
          })
      })
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

    if(data.moviePoster == null) {
      moviePoster = 'https://cdn.amctheatres.com/Media/Default/Images/noposter.jpg';
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
            <input className="addBtn" onClick={this.addMovie} type="image" src={add_movie_ic} alt="addBtn"/>
            <input className="revBtn" type="image" src={remove_movie_ic} alt="revBtn"/>
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps(props) {
    this.data = props.meta;
  }
}

export default ThumbNail;
