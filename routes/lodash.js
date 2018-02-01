var express = require('express');
var router = express.Router();

/* GET /lodash */
router.get('/', function(req, res, next) {
  res.render('lodash/index');
});

router.get('/array', function(req, res, next) {
  res.render('lodash/array');
});

router.get('/collection', function(req, res, next) {
  res.render('lodash/collection');
});

router.get('/date', function(req, res, next) {
  res.render('lodash/date');
});
         
router.get('/function', function(req, res, next) {
  res.render('lodash/function');
});
router.get('/lang', function(req, res, next) {
  res.render('lodash/lang');
});
router.get('/math', function(req, res, next) {
  res.render('lodash/math');
});
router.get('/number', function(req, res, next) {
  res.render('lodash/number');
});
router.get('/object', function(req, res, next) {
  res.render('lodash/object');
});
router.get('/seq', function(req, res, next) {
  res.render('lodash/seq');
});
router.get('/string', function(req, res, next) {
  res.render('lodash/string');
});
router.get('/util', function(req, res, next) {
  res.render('lodash/util');
});
router.get('/properties', function(req, res, next) {
  res.render('lodash/properties');
});
router.get('/methods', function(req, res, next) {
  res.render('lodash/methods');
});
module.exports = router;
