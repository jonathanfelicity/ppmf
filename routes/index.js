const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'Home' });
});
/* GET home page. */
router.get('/events', function(req, res, next) {
  res.render('pages/events', { title: 'Shop' });
});
/* GET home page. */
router.get('/shop', function(req, res, next) {
  res.render('pages/shop', { title: 'Shop' });
});

/* GET home page. */
router.get('/blog', function(req, res, next) {
  res.render('pages/blog', { title: 'Blog' });
});


/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About' });
});

/* GET conatact page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact' });
});

module.exports = router;
