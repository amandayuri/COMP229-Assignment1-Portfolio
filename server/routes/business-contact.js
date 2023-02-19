
// ------- HEADER ------------
// Filename: business-contact.js
// Student name: Amanda Yuri Monteiro Ike
// Student ID: 301257019
// Date: February, 2023 

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactsController = require('../controllers/contact');

// Helper function for guard purposes
function requireAuth(req, res, next){
    // check if the user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next(); //move to one event to the next
}

// GET Route for Contact list page - Read Operation 
router.get('/', requireAuth, contactsController.displayContactList);

// GET Route for displaying Add page - Create Operation 
router.get('/add', requireAuth, contactsController.displayAddPage);

// POST Route for processing Add page - Create Operation 
router.post('/add', requireAuth, contactsController.processAddPage);

// GET Route for displaying Edit page - Update Operation 
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);

// POST Route for processing Edit page - Update Operation 
router.post('/edit/:id', requireAuth, contactsController.processEditPage);

// GET to perform Deletion - Delete Operation 
router.get('/delete/:id', requireAuth, contactsController.performDelete);

module.exports = router;