import React from 'react';
import axios from 'axios';

class Watchlist extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/watchlist')
    .then( (res) => {
      console.log(res.data);
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  render() {
    return(
      <div>

      </div>
    );
  }
}

export default Watchlist;
