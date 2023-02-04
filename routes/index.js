var express = require('express');
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
      detail_page:''
    });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { page_name: 'Projects',
      title: '',
      info_page: '',
      detail_page: ''
    });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { page_name: 'Services' ,
    title: '',
    info_page: '',
    detail_page: ''
  });
});

/* GET Contact Us page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { page_name: 'Contact' ,
    title: '',
    info_page: '',
    detail_page: ''
  });
});

module.exports = router;
