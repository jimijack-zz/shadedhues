var express = require('express');
var router = express.Router();

// load mongoose and connect to a database
var mongoose = require('mongoose');

// require controllers
var printsController = require('../controllers/prints_controller');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET /api/prints listing. */
router.get('/prints', function(req, res, next) {
  res.json({msg: 'respond with a resource'});
});

// contact form?
//router.get('/mail').get(mail.createmail);

module.exports = router;

