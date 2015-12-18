var mongoose = require('mongoose');

var env = require('./environment');

var dbUri = process.env.MONGOLAB_URI;
//env.MONGOLAB_URI ||


// connect to db
mongoose.connect(dbUri);

// export the connection
module.exports = mongoose;
