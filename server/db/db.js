// 引入 mongoose
const mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/shop", { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log("连接数据库成功！！！");
});

module.exports = mongoose;