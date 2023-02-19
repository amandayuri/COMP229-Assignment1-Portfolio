
// ------- HEADER ------------
// Filename: index.js
// Student name: Amanda Yuri Monteiro Ike
// Student ID: 301257019
// Date: February, 2023 

var express = require('express'), fs = require('fs'), app = express();
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectPage);

/* GET Services page. */
router.get('/services', indexController.displayServicePage);

/* GET Contact page. */
router.get('/Contact', indexController.displayContactPage);

// GET Route for displaying Login page
router.get('/login', indexController.displayLoginPage);

// POST Route for processing Login page 
router.post('/login', indexController.processLoginPage);

// GET Route for displaying Register page
router.get('/register', indexController.displayRegisterPage);

// POST Route for processing Register page 
router.post('/register', indexController.processRegisterPage);

// GET to perform Logout
router.get('/logout', indexController.performLogout);

module.exports = router;
