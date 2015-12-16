var mongoose = require('mongoose');

var env = require('./environment');

var dbUri = 'mongodb://localhost/shadedhues_prints';
//env.MONGOLAB_URI ||


// connect to db
mongoose.connect(dbUri);

// export the connection
module.exports = mongoose;
