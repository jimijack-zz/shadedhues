var express = require('express');
var router = express.Router();
var Print = require('../models/print');

/* GET /api/prints listing. */
router.get('/prints', function(req, res, next) {
  res.json({msg: 'respond with a resource'});
});

module.exports = router;
