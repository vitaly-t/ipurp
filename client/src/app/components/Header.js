import React from 'react';
import { Link } from 'react-router-dom';
import home_ic from '../images/home_ic.png';
import movies_ic from '../images/movies_ic.png';
import watchlist_ic from '../images/watchlist_ic.png';

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="navigationBarHolder">
          <ul className="navigationBar">
            <li>
              <button className="homePageBtn" data-tooltip="home page">
                <Link to="/">
                  <img src={home_ic} alt="home" />
                </Link>
              </button>
            </li>
            <li>
              <button className="moviesBtn" data-tooltip="search movies">
                <Link to="/movies">
                  <img src={movies_ic} alt="movies" />
                </Link>
              </button>
            </li>
            <li>
              <button className="watchlistBtn" data-tooltip="check watchlist">
                <Link to="/watchlists">
                  <img src={watchlist_ic} alt="watchlist" />
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
