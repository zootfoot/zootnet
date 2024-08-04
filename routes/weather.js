var express = require('express');
var router = express.Router();
const fs = require('fs');
const { plot, writeToPngFile } = require('nexrad-level-2-plot');

/* GET weather page. */
router.get('/', function(req, res, next) {
  res.render('weather');
});

module.exports = router;
