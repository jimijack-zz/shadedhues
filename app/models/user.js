// Require mongoose to create a model.
var mongoose = require('mongoose');

// Create a schema of your model
var userSchema = new mongoose.Schema({
  lastName: String,
  email: String,
});

// Create the model using your schema.
var User = mongoose.model('User', userSchema);

// Export the model of the Print.
module.exports = User;
