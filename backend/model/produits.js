const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, required: true },
  quantite: { type: Number, required: true },
  description: String,
  img: String,
});

module.exports = mongoose.model('Produit', produitSchema);
