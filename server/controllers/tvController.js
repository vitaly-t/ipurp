const tvService = require('../services/tvService');

function createTv(tv) {
  return tvService.insertTv(tv.id, tv.title, tv.airDate, tv.overview, tv.poster);
}

module.exports = {
  createTv
}
