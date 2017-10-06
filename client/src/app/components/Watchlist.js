import React from 'react';
import axios from 'axios';
import WatchlistCategory from './WatchlistCategory';

class Watchlist extends React.Component {

  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('/api/watchlist')
    .then( (res) => {
      this.setState({
        data: res.data
      });
    })
    .catch( (err) => {
      console.log(err);
    });
  }


  render() {

    return (
      <div>
        <WatchlistCategory data={this.state.data} />
      </div>
    );
  }
}

export default Watchlist;
