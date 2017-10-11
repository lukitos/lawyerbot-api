var knex = require('../../db/knex');
var express = require('express');
var router = express.Router();

/* GET chart data for lead source */
router.get('/', function(req, res, next) {
  let sqlStmt = `select vbot.bot, vemail.email, vphone.phone, vweb.website
    from
    (select count(*) bot
    from contact
    where source = 'bot') vbot,
    (select count(*) email
    from contact
    where source = 'email') vemail,
    (select count(*) phone
    from contact
    where source = 'phone') vphone,
    (select count(*) website
    from contact
    where source = 'website') vweb`;
  knex.raw(sqlStmt).then(function (botData) {
    res.send(botData.rows[0]);
  });
});

module.exports = router;
