const mongoose = require('mongoose');
const Job = require('./jobModel');

const userSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: [true, 'firstName is required']
        },
        lastName: {
            type: String,
            required: [true, 'lastName is required']
        },
        birthDate: {
            type: String,
            required: [true, 'birthDate is required']
        },
        jobs: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Job'
            }
        ]
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
