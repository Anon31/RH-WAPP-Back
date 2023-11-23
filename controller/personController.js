const Person = require('./../models/personModel');

exports.createPerson = async (req, res) => {

    const newPerson = new Person({});
    newPerson.save()
    // try {
    //     const newPerson = await Person.create(req.body);
    //     console.log('const newPerson', newPerson)
    //     res.status(201).json({
    //         status: 'success',
    //         data: newPerson
    //     })
    // } catch (e) {
    //     res.status(400).json({
    //         status: 'failed',
    //         message: 'Invalid data sent!'
    //     })
    // }
}






exports.getPersonById = (req, res) => {
    res.status(201).json({
        status: 'success'
    })
}

exports.getAllPersons = (req, res) => {
    res.status(201).json({
        status: 'success'
    })
}

exports.deletePerson = (req, res) => {
    res.status(204).json({
        status: 'success'
    })
}

exports.updatePerson = (req, res) => {
    res.status(200).json({
        status: 'success'
    })
}
