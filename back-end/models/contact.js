const mongoose = require('mongoose');

//Define a schema for a Contact
const contactSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});


module.exports = mongoose.model('Contact', contactSchema);
