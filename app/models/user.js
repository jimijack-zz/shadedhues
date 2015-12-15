var mongoose = require('mongoose');
var printSchema = require('./print');

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  googleId: String,
  profileImageUrl: String,
  created: { type: Date, default: Date.now }
});

module.exports =  mongoose.model('User', userSchema);

