// Require resource's model(s).
var Print = require('../models/print');

var index = function(req, res) {
  Print.find({}, function(err, records){
      res.send(records);
  });
};

  module.exports = {
  index: index
  };
