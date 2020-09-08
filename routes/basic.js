var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('basic', { title: 'Basic plan' });
});

module.exports = router;