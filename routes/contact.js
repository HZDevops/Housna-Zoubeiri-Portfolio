const express = require('express');
const router = express.Router();

//Import controllers for Contact routes
const contactCtrl = require('../controllers/contact');

//Add authentication routes for User
router.get('/', contactCtrl.getAllContacts);
router.post('/',contactCtrl.createContact);

module.exports = router;
