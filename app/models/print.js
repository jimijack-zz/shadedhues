var mongoose = require('mongoose');

var printSchema = new mongoose.Schema({
  title: String,
  category: String,
  size: String,
  is_framed: boolean
  imageURL: String
});

module.exports =  mongoose.model('Print', printSchema);

