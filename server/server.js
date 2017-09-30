const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const pgp = require('pg-promise')();
const PORT = 5000;

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'Ipurp',
  user: 'postgres',
  password: 'postgres'
}

const db = pgp(cn);

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/add', (req, res, next) => {
  const data = req.body;
  console.log(data);
});

db.none(`CREATE TABLE IF NOT EXISTS movies(
          title     varchar(65) PRIMARY KEY,
          release   varchar(65),
          overview  varchar(255),
          poster    varchar(255)
        )`)
.then( () => {
  console.log("created");
})
.catch( (err) => {
  console.log(err);
});

app.listen(PORT, () => console.log('Listening on port ' + PORT));

module.exports = app;
