
// ------- HEADER ------------
// Filename: contact.js
// Student name: Amanda Yuri Monteiro Ike
// Student ID: 301257019
// Date: February, 2023 

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//create a reference to the model (db schema)
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactlist) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(contactlist);
            res.render('contact/list', {
                page_name: 'Business Contacts', 
                ContactList: contactlist, 
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {page_name: 'Add contact', 
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "phonenumber": req.body.phonenumber,
        "email": req.body.email,
        "company": req.body.company,
        "position": req.body.position
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, contactToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            // show the edit view
            res.render('contact/edit', {page_name: 'Edit Contact', 
            contact: contactToEdit, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updateContact = Contact({
        "_id": id,
        "name": req.body.name,
        "phonenumber": req.body.phonenumber,
        "email": req.body.email,
        "company": req.body.company,
        "position": req.body.position
    });

    Contact.updateOne({_id: id}, updateContact, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            // refresh the Contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id:id}, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            // show the edit view
            res.redirect('/contact-list');
        }
    });
}