import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import Watchlist from './Watchlist';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends React.Component {
  render() {
    return(
      <main className="container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/movies" component={Movie} />
          <Route path="/watchlists" component={Watchlist} />
        </Switch>
      </main>
    );
  }
}

export default Main;
