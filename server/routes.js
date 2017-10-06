const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
const cn = 'postgresql://postgres:postgres@localhost:5432/Ipurp';

const db = pgp(cn);

db.none(`CREATE TABLE IF NOT EXISTS watchlist(
          id        SERIAL PRIMARY KEY,
          movieId   varchar(100),
          title     varchar(65),
          release   varchar(65),
          type      varchar(10)
        )`)
.then( () => {
  console.log("watchlist database has been created");
})
.catch( (err) => {
  console.log(err);
});

router.post('/api/movie/add', (req, res, next) => {
  const data = req.body;
  db.one(`INSERT INTO watchlist(movieId, title, release, type)
        VALUES($1, $2, $3, $4)`, [data.id, data.title, data.release, data.type])
        .then(data => {
          //success
          //console.log(data);
        })
        .catch(error => {
          //console.log(error);
        });
  res.sendStatus(200);
});

router.get('/api/watchlist', (req, res, next) => {
  db.task(t => {
    return t.batch([
      t.any(`SELECT * FROM watchlist WHERE type='tv'`),
      t.any(`SELECT * FROM watchlist WHERE type='movie'`)
    ])
    .then(data => {
      let obj = {};
      obj["tv"] = data[0];
      obj["movie"] = data[1];
      return obj;
    });
  })
  .then(data => {
    res.send(data);
  });
});

module.exports = router;
