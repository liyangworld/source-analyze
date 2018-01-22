var express = require('express');
var router = express.Router();

/* GET /moment */
router.get('/', function(req, res, next) {
  res.render('moment/index');
});






module.exports = router;
