const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, required: true },
  quantite: { type: Number, required: true },
  description: String,
  img: String,
  categorie: String, // POUR les riz, dessert, jus, ....
  menuSpecial: { type: Boolean, default: false }, // true si c'est le menu du jour
}, {
  timestamps: true
});

module.exports = mongoose.model('Produit', produitSchema);