const Job = require('./../models/jobModel');
const Person = require("../models/personModel");

exports.createJob = async (req, res) => {
    try {
        const newJob = await Job.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                job: newJob
            }
        })
    } catch (e) {
        console.log('Created job error', e);
        res.status(400).json({
            status: 'failed',
            message: 'Invalid data sent!'
        })
    }
}
