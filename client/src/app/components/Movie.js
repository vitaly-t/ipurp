import React from 'react';
import Search from './Search';
import ThumbNail from './Thumbnail';

class Movie extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: []
    };
    this.page = '1';
    this.pageTotal = '';
    this.query = '';

    this.fetchMovieTitle = this.fetchMovieTitle.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.removeChild = this.removeChild.bind(this);
  }

  render() {

    return (
      <div className="movieContainer">
        <Search onSubmit={this.fetchMovieTitle} />
        { this.pageTotal !== '' ?
            <div className="moviePage">
              <input className="setPages" onSubmit={this.handleSubmit} placeholder="set page" onKeyPress={this.handleKeyPress} />
              <input className="pages" readOnly="true" value={this.pageTotal+' pages'} />
            </div>
          : null
        }
        { Object.keys(this.state).length === 0 && this.state.constructor === Object ?
            null :
            <div className="thumbNail">
            {
              Object
              .keys(this.state.movie)
              .map((key, i) => <ThumbNail key={i} meta={this.state.movie[key]} />)
            }
            </div>
        }
      </div>
    );
  }

  removeChild() {

  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.page = event.target.value;
      let url = `https://api.themoviedb.org/3/search/movie?api_key=1d1f26ddda9e859fab6bcc7cc41739dc&query=${this.query}&page=${this.page}&include_adult=false`;
      this.fetchApi(url);
    }
  }

  fetchApi(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      // update state with API data
      this.pageTotal = data.total_pages;
      this.eachThumbNail(data);
    });

    // .catch((err) => console.log('Movie not found!'))

  } // end function

  //typeof string
  fetchMovieTitle(movieTitle) {
    this.query = movieTitle;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=1d1f26ddda9e859fab6bcc7cc41739dc&query=${this.query}&include_adult=false`;
    this.fetchApi(url);
  } // end function

  // typeof obj
  eachThumbNail(thumbnail) {
    const movieObj = thumbnail.results;
    const arr = {};
    for(let i = 0; i < movieObj.length; i++) {
      arr[i] =
      {
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
      movie: arr
    });
  }

/*
  componentDidMount() {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=1d1f26ddda9e859fab6bcc7cc41739dc&query=${this.state.movieTitle}&page={this.pages}`;
    this.fetchApi(url);
  }*/
}

export default Movie;
