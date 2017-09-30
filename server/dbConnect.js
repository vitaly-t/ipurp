const pgp = require('pg-promise')();
const cn = 'postgresql://postgres:postgres@localhost:5432/Ipurp';

const db = pgp(cn);

function createTable() {
  db.none(`CREATE TABLE IF NOT EXISTS movies(
            title     varchar(65) PRIMARY KEY,
            release   varchar(65),
            overview  text,
            poster    varchar(255)
          )`)
  .then( () => {
    console.log("database has been created");
  })
  .catch( (err) => {
    console.log(err);
  });
}

module.exports = {
  db,
  createTable
}
