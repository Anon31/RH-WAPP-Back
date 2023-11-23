const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enterprise must have a name']
    },
    jobName: {
        type: String,
        required: [true, 'A job must have a name']
    },
    startDate: {
        type: String,
        required: [true, 'A job must have a name']
    },
    endDate: {
        type: String
    },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
