var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('standart', { title: 'Standart' });
});

module.exports = router;