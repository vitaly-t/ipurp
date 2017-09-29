import React from 'react';
import ReactDOM from 'react-dom';
import search_ic from '../images/search_ic.png';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.state = {value: ''};
  }

  render() {
    return (
      <div className="searchBar">
        <form className="searchBoxForm" onSubmit={this.handleSubmit}>
          <div className="searchBox">
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search movies, Tv shows, etc."/>
            <button className="searchBtn" type="submit">
              <img src={search_ic} alt="srcBtn"/>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
