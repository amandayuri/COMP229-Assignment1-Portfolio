// ------- HEADER ------------
// Filename: index.js
// Student name: Amanda Yuri Monteiro Ike
// Student ID: 301257019
// Date: February, 2023 

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// Create the Used model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {
        page_name: 'Home' , 
        title: 'Welcome to my portfolio', 
        mission: 'My goal is provide data solutions that positively changes the lives of people worldwide. In addition, I am pursuing lifelong learning as there is always something new to expand my knowledge.',
        info_page: 'On this portfolio you can find out some projects, resume, and contact information.',
        detail_page: 'Thank you for visiting my portfolio. For more information, please visit About Me page.',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { 
        page_name: 'About',
        title: 'About Me',
        info_page: '',
        p1: 'I was born and raised on Brazil, São Paulo.',
        p2: 'I am an international student on Centennial College. I am currently studying Software Engineering Technology.',
        p3: 'I have experience on Data Engineer field, and I am keen on Data Solutions.',
        location_info: 'Current living in Toronto, ON.',
        displayName: req.user ? req.user.displayName : '' 
    });
}

module.exports.displayProjectPage = (req, res, next) => {
    res.render('index', { 
        page_name: 'Projects',
        title: 'Projects',
        info_page: 'Few previous projects done on different companies.',
        detail_page: '',
        displayName: req.user ? req.user.displayName : '' 
    });
}

module.exports.displayServicePage = (req, res, next) => {
    res.render('index', { 
        page_name: 'Services' ,
        title: 'Services',
        info_page: 'Offer services using Programming Languages, Tools and Frameworks, and Skills and Techniques:',
        detail_page: '', 
        displayName: req.user ? req.user.displayName : '' 
    });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { 
        page_name: 'Contact Me' ,
        title: 'Contact me',
        info_page: 'Let is create something together.',
        detail_page: 'Mail me at amandayuriike@outlook.com', 
        displayName: req.user ? req.user.displayName : '' 
    });
}

// AUTH part

module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user){
        res.render('auth/login',{
            page_name: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName: ''
        })
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server err?
        if(err){
            return next(err);
        }
        //if there a user login error?
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error?
            if(err){
                return next(err);
            }else{
                return res.redirect('/contact-list');
            }
        });
    }) (req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) =>{
    if(!req.user){
        res.render('auth/register',{
            page_name: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName: ''
        });
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) =>{
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err){
            console.log("Error: Inserting New User" );
            if(err.name == "UserExistsError"){
                req.flash(
                    'registerMessage',
                    'Registration Error: User already exists.'
                );
                console.log('Error: User already exists!');
            }
            return res.render('auth/register',{
                page_name: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName: ''
            });
        }
        else{
            // if no error exists, then registration is successful

            // redirect the ser and authenticate them

            return passport.authenticate('local')(req, res, () =>{
                res.redirect('/contact-list')
            });
        }
    })
}

module.exports.performLogout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}