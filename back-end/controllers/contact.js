const ModelsContact = require('../models/contact');

function createContact (req, res) {
  const contactObject = JSON.parse(req.body.contact);
  const contact = new ModelsSauce({contactObject});
  contact
    .save()
    .then(() => res.status(201).json({ message: 'Contact saved !' }))
    .catch((error) => res.status(400).json({ error }));
}

module.exports = {
  createContact,
};
