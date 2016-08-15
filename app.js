/**
 * Created by youpeng on 16/7/28.
 */
var express = require('./config/express');
var mongdb = require('./config/mongoose');

var db = mongdb();
var app = express();

module.exports = app;