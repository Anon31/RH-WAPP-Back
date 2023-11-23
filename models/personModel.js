const mongoose = require('mongoose');
const Job = require('./jobModel');

const personSchema = new mongoose.Schema({
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        birthDate: {
            type: String
        }
    }
);

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
