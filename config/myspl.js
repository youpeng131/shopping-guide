/**
 * Created by youpeng on 16/7/29.
 */
var mysql = require('mysql');
var config = require('./config.js');

module.exports = function() {
  var db;
  function handleDisconnect() {
    db = mysql.createConnection(config.mysql);
    db.connect(function (err) {
      if (err) {
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000);
      }
    });
    db.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') {
        handleDisconnect();
      } else {
        throw err;
      }
    });
  }
  handleDisconnect();

  return db;
};
