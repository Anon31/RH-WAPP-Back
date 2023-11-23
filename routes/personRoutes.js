const express = require('express')
const personController =  require('./../controller/personController');

const router = express.Router();

router.route('/').post(personController.createPerson)

module.exports = router;
