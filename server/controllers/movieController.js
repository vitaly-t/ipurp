const movieService = require('../services/movieService');

function createMovie(movie) {
  return movieService.insertMovie(movie.id, movie.title, movie.release, movie.overview, movie.poster);
}

module.exports = {
  createMovie
}
