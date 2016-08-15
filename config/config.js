/**
 * Created by youpeng on 16/7/28.
 */
var config = null;

if (process && process.env && process.env.NODE_ENV) {
  config = require('./env/' + process.env.NODE_ENV);
} else {
  config = require('./env/development.js');
}

module.exports = config;