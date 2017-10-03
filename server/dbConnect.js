const pgp = require('pg-promise')();
const cn = 'postgresql://postgres:postgres@localhost:5432/Ipurp';

const db = pgp(cn);

function createTable() {
  db.none(`CREATE TABLE IF NOT EXISTS movies(
            id        integer PRIMARY KEY,
            title     varchar(65),
            release   varchar(65),
            overview  text,
            poster    varchar(255)
          )`)
  .then( () => {
    console.log("movies database has been created");
  })
  .catch( (err) => {
    console.log(err);
  });

  db.none(`CREATE TABLE IF NOT EXISTS tvshow(
            id        integer PRIMARY KEY,
            title     varchar(65),
            airDate   varchar(65),
            overview  text,
            poster    varchar(255)
          )`)
  .then( () => {
    console.log("tvs database has been created");
  })
  .catch( (err) => {
    console.log(err);
  });
}

module.exports = {
  db,
  createTable
}
