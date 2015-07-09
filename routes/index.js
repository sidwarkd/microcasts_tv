var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end("This is the api main page");
});

router.get('/test', function(req, res, next) {
  res.json({user:"Kevin", email:"sidwarkd@hardlysoftware.com"});
});

module.exports = router;
