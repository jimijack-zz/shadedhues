// Require resource's model(s).
var Print = require('../models/print');

var index = function(req, res) {
  Print.find({}, function(err, prints){
    if (err) {
      res.send(err);
    }

    // return the prints
    res.json(prints);
  });
};

var printShow = function(req, res, next) {
  var id = req.params.id;

  Print.findById(id, function(err, print) {
    if(err) {
      res.semd(err);
    }

    // return that print as JSON
    res.json(print);
  });
};


// Export the function/s as JSON
module.exports = {
  printShow:   printShow
};

