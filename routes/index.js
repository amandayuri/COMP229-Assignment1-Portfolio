
// ------- HEADER ------------
// Filename: index.js
// Student name: Amanda Yuri Monteiro Ike
// Student ID: 301257019
// Date: February, 2023 

var express = require('express'), fs = require('fs'), app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page_name: 'Home' , 
    title: 'Welcome to my portfolio', 
    mission: 'My goal is provide data solutions that positively changes the lives of people worldwide. In addition, I am pursuing lifelong learning as there is always something new to expand my knowledge.',
    info_page: 'On this portfolio you can find out some projects, resume, and contact information.',
    detail_page: 'Thank you for visiting my portfolio. For more information, please visit About Me page.'
  }); // linked to views/index.ejs
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {page_name: 'Home', 
      title: 'Welcome to my portfolio', 
      mission: 'My goal is provide data solutions that positively changes the lives of people worldwide. In addition, I am pursuing lifelong learning as there is always something new to expand my knowledge.',
      info_page: 'On this portfolio you can find out some projects, resume, and contact information.',
      detail_page: 'Thank you for visiting my portfolio. For more information, please visit About Me page.'
    });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { page_name: 'About',
      title: 'About Me',
      info_page: '',
      p1: 'I was born and raised on Brazil, São Paulo.',
      p2: 'I am an international student on Centennial College. I am currently studying Software Engineering Technology.',
      p3: 'I have experience on Data Engineer field, and I am keen on Data Solutions.',
      location_info: 'Current living in Toronto, ON.'
    });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { page_name: 'Projects',
      title: 'Projects',
      info_page: 'Few previous projects done on different companies.',
      detail_page: ''
    });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { page_name: 'Services' ,
    title: 'Services',
    info_page: 'Offer services using Programming Languages, Tools and Frameworks, and Skills and Techniques:',
    detail_page: ''
  });
});

/* GET Contact Us page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { page_name: 'Contact' ,
    title: 'Contact me',
    info_page: 'Let is create something together.',
    detail_page: 'Mail me at amandayuriike@outlook.com'
  });
});



module.exports = router;
