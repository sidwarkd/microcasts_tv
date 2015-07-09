var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.end("This is the api page");
});

router.get('/test', function(req, res){
  res.end("This is a test page");
});

module.exports = router;