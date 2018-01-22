var express = require('express');
var router = express.Router();

/* GET /lodash */
router.get('/', function(req, res, next) {
  res.render('lodash/index');
});

router.get('/array', function(req, res, next) {
  res.render('lodash/array');
});




module.exports = router;
