var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    userModel.find({}, function(err, doc) {
            if (err) {
                throw new Error(err)
                return;
            }
            console.log('数据 ' + doc)
            res.render('index', { title: 'cjcx', user: doc })
        })
        // res.render('index', { title: '12q' });
});

router.get('/edit', function(req, res, next) {
    res.render('list', { title: 'cjlr' });
});
router.get('/cdata', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    var adata = { code: 200, status: 'ok', data: [{ "name": "t1", "age": 23 }, { "name": "t2", "age": 33 }, { "name": "t3", "age": 43 }] };
    res.json(adata);
});
router.post('/edit', function(req, res, next) {
    var username = req.body.username;
    var chinese = req.body.chinese;
    var english = req.body.english;
    var math = req.body.math;
    userModel.create([{ username: username, chinese: chinese, english: english, math: math }], function(err, doc) {
        if (err) {
            throw new Error(err);
            return;
        }
        console.log("录入成功 " + doc)
        res.redirect('/');
    })
});

router.get('/test', function(req, res, next) {
    var user = req.session.user || { name: 'pj' }; // req.session必须要安装express-session
    res.render('test', { title: 'a', user: user }); // 不传title过去会报错，传对象下面的title属性则不会
})
router.get('/users', function(req, res, next) {
    var error = {
        status: 509,
        stack: 'qqq'
    };
    var user = {
        name: 'tcx',
        zy: 'testde'
    };
    req.session.user = user;
    res.render('error', {
        message: 'ccc',
        error: error
    })
});

module.exports = router;