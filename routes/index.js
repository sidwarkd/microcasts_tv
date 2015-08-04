var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

/* GET home page. */
router.get('/', stormpath.loginRequired, function(req, res, next) {
  res.end("This is the api main page. You are currently logged in as " + req.user.fullName);
});

router.get('/test', function(req, res, next) {
  res.json({user:"Kevin", email:"sidwarkd@hardlysoftware.com"});
});

module.exports = router;
