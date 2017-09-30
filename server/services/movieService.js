const db = require('../dbConnect').db;

function insertMovie(title, release, overview, poster) {
  return db.one(`INSERT INTO movies(title, release, overview, poster)
          VALUES($1, $2, $3, $4)`, [title, release, overview, poster])
          .then( () => {
            //success
          })
          .catch(error => {
            //error
          });
}

module.exports = {
  insertMovie
}
