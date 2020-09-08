var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('videos', { title: 'Videos' });
});

module.exports = router;