var express = require('express');
var router = express.Router();

/* GET weather page. */
router.get('/', function(req, res, next) {
  res.render('weather');
});

module.exports = router;
