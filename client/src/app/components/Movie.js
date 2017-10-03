import React from 'react';
import Search from './Search';
import MovieThumbNail from './MovieThumbnail';
import TvThumbNail from './TvThumbnail';

class Movie extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: []
    };
    this.page = '1';
    this.pageTotal = '';
    this.query = '';
    this.type = 'movie';
    this.fetchMovieTitle = this.fetchMovieTitle.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }



  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.page = event.target.value;
      let url = `https://api.themoviedb.org/3/search/${this.type}?api_key=1d1f26ddda9e859fab6bcc7cc41739dc&query=${this.query}&page=${this.page}&include_adult=false`;
      this.fetchApi(url);
    }
  }

  fetchApi(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      // update state with API data
      this.pageTotal = data.total_pages;
      switch(this.type) {
        case "movie":
          this.movieThumbNail(data);
          break;
        case "tv":
          this.tvThumbNail(data);
          break;
      }
    });

    // .catch((err) => console.log('Movie not found!'))

  } // end function

  //
  fetchMovieTitle(movieTitle) {
    this.query = movieTitle.searchValue;
    this.type = movieTitle.optionValue;
    let url = `https://api.themoviedb.org/3/search/${this.type}?api_key=1d1f26ddda9e859fab6bcc7cc41739dc&query=${this.query}&include_adult=false`;
    this.fetchApi(url);
  } // end function

  // thumbnail - typeof Object
  movieThumbNail(thumbnail) {
    const movieObj = thumbnail.results;
    const movieList = {};
    for(let i = 0; i < movieObj.length; i++) {
      movieList[i] =
      {
        movieId: movieObj[i].id,
        movieTitle: movieObj[i].title,
        movieOriginalTitle: movieObj[i].original_title,
        movieVoteCount: movieObj[i].vote_count,
        movieVoteAverage: movieObj[i].vote_average,
        moviePoster: movieObj[i].poster_path,
        movieBackdrop: movieObj[i].backdrop_path,
        movieOverview: movieObj[i].overview,
        movieReleaseDate: movieObj[i].release_date
      }
    }
    this.setState({
      movie: movieList
    });
  }

  tvThumbNail(thumbnail) {
    const tvObj = thumbnail.results;
    const tvList = {};
    for(let i = 0; i < tvObj.length; i++) {
      tvList[i] =
      {
        tvId: tvObj[i].id,
        tvName: tvObj[i].name,
        tvOriginalName: tvObj[i].original_name,
        tvVoteCount: tvObj[i].vote_count,
        tvVoteAverage: tvObj[i].vote_average,
        tvPoster: tvObj[i].poster_path,
        tvBackdrop: tvObj[i].backdrop_path,
        tvOverview: tvObj[i].overview,
        tvAirDate: tvObj[i].first_air_date
      }
    }
    this.setState({
      movie: tvList
    });
  }

  renderPage() {
    if(this.pageTotal !== '') {
      return (
        <div className="moviePage">
          <input className="setPages" onSubmit={this.handleSubmit} placeholder="set page" onKeyPress={this.handleKeyPress} />
          <input className="pages" readOnly="true" value={this.pageTotal+' pages'} />
        </div>
      );
    }
    else {
      return null;
    }
  }

  renderMovieThumbnail() {
    if(Object.keys(this.state).length === 0 && this.state.constructor === Object) {
      return null;
    }
    else {
      return (
        <div className="MovieThumbNail">
        {
          Object
          .keys(this.state.movie)
          .map((key, i) => <MovieThumbNail key={i} meta={this.state.movie[key]} />)
        }
        </div>
      );
    }
  }

  renderTvThumbnail() {
    if(Object.keys(this.state).length === 0 && this.state.constructor === Object) {
      return null;
    }
    else {
      return (
        <div className="TvThumbNail">
        {
          Object
          .keys(this.state.movie)
          .map((key, i) => <TvThumbNail key={i} meta={this.state.movie[key]} />)
        }
        </div>
      );
    }
  }

  render() {

    return (
      <div className="movieContainer">
        <Search onSubmit={this.fetchMovieTitle} />
        { this.renderPage() }
        { this.type === "movie" ? this.renderMovieThumbnail() : this.renderTvThumbnail() }
      </div>
    );
  }
/*
  componentDidMount() {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=1d1f26ddda9e859fab6bcc7cc41739dc&query=${this.state.movieTitle}&page={this.pages}`;
    this.fetchApi(url);
  }*/
}

export default Movie;
