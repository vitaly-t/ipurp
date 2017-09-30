const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./dbConnect');
const routes = require('./routes');
const PORT = 5000;

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => console.log('Listening on port ' + PORT));

module.exports = app;
