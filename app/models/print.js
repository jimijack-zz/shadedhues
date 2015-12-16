var mongoose = require('mongoose');

var printSchema = mongoose.Schema({
  title: String,
  category: String,
  size: String,
  price: String,
  imageURL: String
});

var Print = mongoose.model('Print', printSchema);

module.exports = Print;
