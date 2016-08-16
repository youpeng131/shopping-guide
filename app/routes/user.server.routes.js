/**
 * Created by youpeng on 16/7/29.
 */
var UserController = require('../controllers/user.server.controller.js');

module.exports = function(app) {
  app.route('/user')
    .get(UserController.list);
    // .post(UserController.create);
  //
  // app.route('/user/:nid')
  //   .get(UserController.get);
  //
  // app.param('nid', UserController.getById);
};
