const ModelsContact = require('../models/contact');

function createContact (req, res) {
  const contact = new ModelsContact({
    firstname: req.body.firstname,
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  contact
    .save()
    .then(() => res.status(201).json({ message: 'Contact saved !' }))
    .catch((error) => res.status(400).json({ error }));
}

function getAllContacts(req, res) {
  ModelsContact.find()
    .then((contacts) => res.status(200).json(contacts))
    .catch((error) => res.status(400).json({ error }));
}

module.exports = {
  createContact,
  getAllContacts
};
