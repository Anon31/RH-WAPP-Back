const User = require('../models/userModel');

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: newUser
        })
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: 'Invalid data sent!'
        })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: user
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.getAllUsers = (req, res) => {
    res.status(201).json({
        status: 'success'
    })
}

exports.deleteUser = (req, res) => {
    res.status(204).json({
        status: 'success'
    })
}

exports.updateUser = (req, res) => {
    res.status(200).json({
        status: 'success'
    })
}
