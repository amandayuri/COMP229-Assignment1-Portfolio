
// ------- HEADER ------------
// Filename: contact.js
// Student name: Amanda Yuri Monteiro Ike
// Student ID: 301257019
// Date: February, 2023 

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    phonenumber: String,
    email: String,
    company: String,
    Position: String
}, {
    collection: "contacts"
}) ;

module.exports = mongoose.model('Contact', contactModel);
