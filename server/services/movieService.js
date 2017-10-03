const db = require('../dbConnect').db;

function insertMovie(id, title, release, overview, poster) {
  return db.one(`INSERT INTO movies(id, title, release, overview, poster)
          VALUES($1, $2, $3, $4, $5)`, [id, title, release, overview, poster])
          .then(data => {
            //success
            //console.log(data);
          })
          .catch(error => {
            //console.log(error);
          });
}

module.exports = {
  insertMovie
}
