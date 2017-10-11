require('dotenv')
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var index = require('./routes/index');
var contact = require('./routes/api/contact');
var chartdata = require('./routes/api/chartData');
var metrics = require('./routes/api/metrics');
var keys = require('./routes/api/keys');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api/contact', contact);
app.use('/api/chartdata', chartdata)
app.use('/api/keys', keys);
app.use('/api/metrics', metrics);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
