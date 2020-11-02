var express = require('express');
var router = express.Router();
// 引入userModel
const UserModel = require("../db/users");

/* GET users listing. */
router.post('/', function(req, res, next) {
  // 查询数据
  UserModel.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(docs);
    res.send({
      status: true,
      data: docs,
      message: "获取成功！！！"
    });
  })
});

module.exports = router;
