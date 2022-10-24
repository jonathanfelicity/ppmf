const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/donate', function(req, res, next) {
  res.render('pages/donate', { title: 'Donate' });
});

/* GET conatact page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact' });
});

module.exports = router;
