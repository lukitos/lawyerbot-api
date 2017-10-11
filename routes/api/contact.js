var knex = require('../../db/knex');
var express = require('express');
var router = express.Router();

/* Helper function */
function getAllContacts(res) {
  knex('contact')
  .orderBy('name', 'asc')
  .then(function (contacts) {
    res.send(contacts);
  });
}

/* GET all contacts */
router.get('/', function(req, res, next) {
  getAllContacts(res);
});

/* INSERT one contact */
router.post('/', function (req, res, next) {
  knex('contact')
    .insert(req.body)
    .then(function () {
      getAllContacts(res);
  });
});

/* ASSIGNED list of contacts */
router.get('/assign/:name', function (req, res, next) {
  knex('contact')
    .where('assignedto', req.params.name)
    .orderBy('name', 'asc')
    .then(function (contacts) {
      res.send(contacts);
    });
});

/* GET a contact. */
router.get('/:id', function (req, res, next) {
  knex('contact')
    .where('id', req.params.id)
    .then(function (contact) {
      res.send(contact);
    });
});

/* EDIT a contact */
router.patch('/:id', function (req, res, next) {
  knex('contact')
    .where('id', req.params.id)
    .update(req.body)
    .then(function () {
      getAllContacts(res);
    });
});

/* DELETE a contact */
router.delete('/:id', function (req, res, next) {
  knex('contact')
    .where('id', req.params.id)
    .del()
    .then(function () {
      getAllContacts(res);
    });
});

module.exports = router;
