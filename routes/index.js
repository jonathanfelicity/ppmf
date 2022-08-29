const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/shop', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/blog', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET conatact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
