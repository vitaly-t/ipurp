const movieService = require('../services/movieService');

function createMovie(movie) {
  return movieService.insertMovie(movie.title, movie.release, movie.overview, movie.poster);
}

module.exports = {
  createMovie
}
