
// ------- HEADER ------------
// Filename: user.js
// Student name: Amanda Yuri Monteiro Ike
// Student ID: 301257019
// Date: February, 2023 

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
