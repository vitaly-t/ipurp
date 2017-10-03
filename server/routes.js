const express = require('express');
const router = express.Router();
const db = require('./dbConnect');
const movieController = require('./controllers/movieController');
const tvController = require('./controllers/tvController');
const movieService = require('./services/movieService');
const tvService = require('./services/tvService');

db.createTable();

router.post('/api/movie/add', (req, res, next) => {
  const data = req.body;
  movieController.createMovie(data);
  res.sendStatus(200);
});

router.post('/api/tv/add', (req, res, next) => {
  const data = req.body;
  tvController.createTv(data);
  res.sendStatus(200);
});

module.exports = router;
