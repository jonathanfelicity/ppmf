const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/signin", function (req, res, next) {
  res.send("respond with a resource");
});

/* GET users listing. */
router.get("/recover", function (req, res, next) {
  res.send("respond with a resource");
});

  

module.exports = router;
