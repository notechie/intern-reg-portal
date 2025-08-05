const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  skills: String,
  why: String
}, { timestamps: true });

module.exports = mongoose.model('Applicant', applicantSchema);
