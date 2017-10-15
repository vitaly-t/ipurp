import React from 'react';
import '../stylesheets/watchlistCategory.css';
class WatchlistCategory extends React.Component {

  constructor() {
    super();

  }

  fetchMovieDetails(movieId, type) {
    let url = '';
  }

  render() {

    let data = this.props.meta;
    let id = data.movieid,
        release = data.release,
        title = data.title,
        type = data.type,
        poster = 'https://image.tmdb.org/t/p/w500' + data.poster,
        addDate = data.addDate;

    return (
      <div className="categoryContainer">
        <div className="containerBackground">
          <img className="containerImage" src={poster} alt={title} />
        </div>
        <div className="info">
          <div className="title">{title}</div>
          <div className="release">{release}</div>
        </div>
      </div>
    );
  }

}

export default WatchlistCategory;
