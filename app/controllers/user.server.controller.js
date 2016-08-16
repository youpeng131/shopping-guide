/**
 * Created by youpeng on 16/7/29.
 */

// var myspl = require('myspl');

module.exports = {
  // create: function(req, res, next) {
  //   var user = User(req.body);
  //   user.save(function(err) {
  //     if (err) return next(err);
  //
  //     return res.json(user);
  //   });
  // },

  list: function(req, res, next) {
    var data =[
      {id: 1, name: "游鹏", age: "25", sex: "男"},
      {id: 2, name: "张三", age: "20", sex: "男"},
      {id: 3, name: "小红", age: "16", sex: "女"}
    ];

    console.log(data);

    return res.json(data);
    // var pagesize = parseInt(req.query.pagesize, 10) || 10;
    // var pagestart = parseInt(req.query.pagestart, 10) || 1;
    // User
    //   .find({})
    //   .skip((pagestart - 1) + pagesize)
    //   .limit(pagesize)
    //   .exec(function(err, docs) {
    //     if (err) return next(err);
    //     console.log(docs);
    //     return res.json(docs);
    //   })
  }

  // getById: function(req, res, next, id) {
  //   if (!id) return next(new Error('User not Found'));
  //   User.findOne({_id: id})
  //     .exec(function(err, doc) {
  //       if (err) return next(err);
  //
  //       if (doc) return next(new Error('User not Fount'));
  //
  //       req.user = doc;
  //
  //       return next();
  //
  //     });
  // },
  //
  // get: function(req, res, next) {
  //   return res.json(req.user);
  // }
};
