const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: String,
  level: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', ClientSchema);