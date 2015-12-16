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

// ========================================================

// var express = require('express');
// var router = express.Router();


// // load mongoose and connect to a database
// var mongoose = require('mongoose');

// // Require controllers.
// var usersController = require('../controllers/users');
// var tasksController = require('../controllers/tasks');
// var tokenController = require('../controllers/token');


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/users', function(req, res, next) {
//   res.send('New User');

// });
// router.post('/users', usersController.create);


// router.get('/tasks', function(req, res, next){
//   res.send('Task Page');
// });
// router.post('/tasks', tasksController.create);

// // Post token

// router.post('/token', tokenController.token);


// module.exports = router;
