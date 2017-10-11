var knex = require('../../db/knex');
var express = require('express');
var router = express.Router();

/* Helper function */
function getMetrics(res) {
  knex('metric').then(function (metrics) {
    res.send(metrics);
  });
}

/* GET all metrics */
router.get('/', function (req, res, next) {
  getMetrics(res);
});

/* UPDATE Number of Chat Session initiated */
router.patch('/', function (req, res, next) {
  // let sqlStmt = `update metric set ${Object.keys(req.body)} = ${req.body[Object.keys(req.body)]} where id = 1`;
  let sqlStmt = `update metric set ${Object.keys(req.body)} = ${Object.keys(req.body)} + 1 where id = 1`;
  console.log('sqlStmt=', sqlStmt);
  knex.raw(sqlStmt).then(function () {
    getMetrics(res);
  });
});

module.exports = router;
