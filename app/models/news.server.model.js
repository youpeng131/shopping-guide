/**
 * Created by youpeng on 16/7/29.
 */
var mongoose = require('mongoose');

var NewSchema = new mongoose.Schema({
  title: String,
  content: String,
  createTime: {
    type: Date,
    default : Date.now()
  }
});

var News = mongoose.model('News', NewSchema);