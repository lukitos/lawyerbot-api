var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config({ path: '.env' });

/* GET API.AI Client Token */
router.get('/apiai', function(req, res, next) {
  res.send(process.env.APIAI_CLIENT_TOKEN);
});

/* GET Firebase API Keys */
router.get('/firebase', function(req, res, next) {
  res.send(process.env.FIREBASE_APIKEY);
});


module.exports = router;
