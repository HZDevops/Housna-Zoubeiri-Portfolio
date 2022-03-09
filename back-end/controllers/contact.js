const ModelsContact = require('../models/contact');

function createContact (req, res) {
  const { firstname, name, email, message } =  req.body;
  const contact = new ModelsContact({firstname, name, email, message});
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
