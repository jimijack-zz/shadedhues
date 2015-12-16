// Require mongoose to create a model.
var mongoose = require('mongoose');

// Create a schema of your model
var printSchema = mongoose.Schema({
  title: String,
  category: String,
  size: String,
  price: String,
  imageURL: String
});

// Create the model using your schema.
var Print = mongoose.model('Print', printSchema);

// Export the model of the Print.
module.exports = Print;
