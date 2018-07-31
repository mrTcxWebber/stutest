var mongoose = require('mongoose');
var db = require("../database");

var userSchema = new mongoose.Schema({
    username: String, // 录入的信息类型如果不对应就回报错，所以前端要验证
    chinese: Number,
    english: Number,
    math: Number
})
var Model = mongoose.model('stutests', userSchema);
module.exports = Model;