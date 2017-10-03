const db = require('../dbConnect').db;

function insertTv(id, title, airDate, overview, poster) {
  return db.one(`INSERT INTO tvshow(id, title, airDate, overview, poster)
          VALUES($1, $2, $3, $4, $5)`, [id, title, airDate, overview, poster])
          .then(data => {
            //success
            //console.log(data);
          })
          .catch(error => {
            //console.log(error);
          });
}

module.exports = {
  insertTv
}
