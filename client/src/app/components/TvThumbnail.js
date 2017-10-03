import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import add_movie_ic from '../images/add_movie_ic.png';
import remove_movie_ic from '../images/remove_movie_ic.png';

class TvThumbnail extends React.Component {

  constructor() {
    super();

    this.data = [];
    this.addTvShow = this.addTvShow.bind(this);
  }

  addTvShow(event) {
    event.preventDefault();
    let data = this.props.meta;
    axios.post('/api/tv/add', {
      id: data.tvId,
      title: data.tvName,
      airDate: data.tvAirDate,
      overview: data.tvOverview,
      poster: 'https://image.tmdb.org/t/p/w500' + data.tvPoster
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    let data = this.props.meta;

    let tvName = data.tvName,
        tvVoteCount = data.tvVoteCount,
        tvVoteAverage = data.tvVoteAverage,
        tvOriginalTitle = data.tvOriginalName,
        tvOverview = data.tvOverview,
        tvAirDate = data.tvAirDate,
        tvPoster = 'https://image.tmdb.org/t/p/w500' + data.tvPoster,
        tvBackdrop = 'https://image.tmdb.org/t/p/original' + data.tvBackdrop;

    if(tvName === "") {
      tvName = "";
    }

    if(tvOverview.length === "") {
      tvOverview = "this tv show doesn´t have any overview";
    }

    if(tvAirDate === "") {
      tvAirDate = "--/--/--";
    }

    if(data.tvPoster == null) {
      tvPoster = 'https://cdn.amctheatres.com/Media/Default/Images/noposter.jpg';
    }
    return (
      <div className="movieWrapper">
        <div className="movieThumbNail">
          <img className="moviePoster" src={tvPoster} alt={tvName} />
          <div className="movieTemp">
            <div className="movieTitle" >{tvName}</div>
            <div className="movieReleaseDate">First Air:  {tvAirDate}</div>
            <div className="movieOverView">
              <span className="overview">{tvOverview}</span>
            </div>
            <div className="buttonHolder">
              <input className="addTvBtn" onClick={this.addTvShow} type="image" src={add_movie_ic} alt="addBtn"/>
              <input className="revTvBtn" type="image" src={remove_movie_ic} alt="revBtn"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps(props) {
    this.data = props.meta;
  }
}

export default TvThumbnail;
