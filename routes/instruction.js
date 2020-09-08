var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('instruction', { title: 'Instruction' });
});

module.exports = router;