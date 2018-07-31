var express = require('express');
var router = express.Router();


router.get('/test', function(req, res, next) {
  var user = req.session.user || { name: 'pj' };
	 res.render('test', { user: user });
});

module.exports = router;
