/**
 * Created by youpeng on 16/7/29.
 */
var mongoose = require('mongoose');
var config = require('./config.js');

module.exports = function() {
  console.log(config.mongodb);
  var db = mongoose.connect(config.mongodb);

  require('../app/models/news.server.model.js');

  return db;
};