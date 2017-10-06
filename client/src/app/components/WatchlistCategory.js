import React from 'react';

class WatchlistCategory extends React.Component {

  componentWillReceiveProps(props) {
    if(props !== undefined) {
      console.log("this is watchlistCat", props);
    }
  }

  fetchMovieDetails(movieId, type) {
    let url = '';
  }

  render() {

    return (
      <div>

      </div>
    );
  }

}

export default WatchlistCategory;
