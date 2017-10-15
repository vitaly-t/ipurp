import React from 'react';
import { Link } from 'react-router-dom';
import home_ic from '../images/home_ic.png';
import movies_ic from '../images/movies_ic.png';
import watchlist_ic from '../images/watchlist_ic.png';
import '../stylesheets/header.css';
// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="navigationBarHolder">
          <ul className="navigationBar">
            <li>
              <Link to="/" className="homePageBtn" data-tooltip="home page">
                <img src={home_ic} alt="home" />
              </Link>
            </li>
            <li>
              <Link to="/movies" className="moviesBtn" data-tooltip="search movies">
                <img src={movies_ic} alt="movies" />
              </Link>
            </li>
            <li>
              <Link to="/watchlists" className="watchlistBtn" data-tooltip="check watchlist">
                <img src={watchlist_ic} alt="watchlist" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
