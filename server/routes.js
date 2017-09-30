const express = require('express');
const router = express.Router();
const db = require('./dbConnect');
const movieController = require('./controllers/movieController');
const movieService = require('./services/movieService');

db.createTable();

router.post('/api/add', (req, res, next) => {
  const data = req.body;
  console.log(data);
  movieController.createMovie(data);
  res.sendStatus(200);
});

module.exports = router;
