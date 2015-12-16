var express = require('express');
var router = express.Router();

// load mongoose and connect to a database
var mongoose = require('mongoose');

// require controllers
var printsController = require('../controllers/prints_controller');

/* GET /api/prints listing. */
router.get('/prints', printsController.allPrints)
router.get('/prints/:id', printsController.printShow)

// contact form?
//router.get('/mail').get(mail.createmail);

module.exports = router;

