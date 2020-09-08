var express = require('express');
var router = express.Router();

/* GET 404 listing. */
router.get('/', function(req, res, next) {
  res.render('404');
});

module.exports = router;