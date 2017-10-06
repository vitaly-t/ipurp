import React from 'react';
import search_ic from '../images/search_ic.png';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      optionValue: 'movie'
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  handleOptionChange(event) {
    this.setState({
      optionValue: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.searchValue !== '') {
      this.props.onSubmit(this.state);
      console.log("before: ", this.state);
      this.setState({
        searchValue: ''
      });
    }
  }

  render() {
    return (
      <div className="searchBar">
        <form className="searchBoxForm" onSubmit={this.handleSubmit}>
          <div className="searchBox">
            <input type="text" value={this.state.searchValue} onChange={this.handleSearchChange} placeholder="search here.."/>
            <button className="searchBtn" type="submit">
              <img src={search_ic} alt="srcBtn"/>
            </button>
          </div>
          <select className="options" value={this.state.optionValue} onChange={this.handleOptionChange}>
            <option value="movie">Movie</option>
            <option value="tv">Tv</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Search;
