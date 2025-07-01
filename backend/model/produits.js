const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, required: true },
  quantite: { type: Number, required: true },
  description: String,
  img: String,}, {
  timestamps: true // cet date et heure a l'instant est necessaire pour bien trier les produits
});

module.exports = mongoose.model('Produit', produitSchema);