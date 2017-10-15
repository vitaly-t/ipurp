import React from 'react';
import axios from 'axios';
import WatchlistCategory from './WatchlistCategory';
import '../stylesheets/watchlist.css';
class Watchlist extends React.Component {

  constructor() {
    super();

    this.state = {
      tv: [],
      movie: []
    };
  }

  componentDidMount() {
    axios.get('/api/watchlist')
    .then( (res) => {
      this.setState({
        tv: res.data.tv,
        movie: res.data.movie
      });
    })
    .catch( (err) => {
    });
  }

  renderTvCategory() {
    console.log(this.state.tv);
    return (
      <div className="listContainer">
      {
        Object
        .keys(this.state.tv)
        .map((key, i) => <WatchlistCategory key={i} meta={this.state.tv[key]}/>)
      }
      </div>
    );
  }

  renderMovieCategory() {
    return (
      <div className="listContainer">
      {
        Object
        .keys(this.state.movie)
        .map((key, i) => <WatchlistCategory key={i} meta={this.state.movie[key]}/>)
      }
      </div>
    );
  }

  render() {

    return (
      <div className="watchlistContainer">
        <div className="tvContainer">
          <div>Tv shows</div>
          { this.renderTvCategory() }
        </div>
        <div className="moviesContainer">
          <div>Movies</div>
          { this.renderMovieCategory() }
        </div>
      </div>
    );
  }
}

export default Watchlist;
