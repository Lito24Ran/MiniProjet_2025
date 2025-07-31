const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
  clientNom: String,
  niveau: String, // pour le cash
  numero: String, // pour Mvola
  methodePaiement: String,
  produits: [
    {
      nom: String,
      prix: Number,
      quantity: Number,
    }
  ],
  total: Number,
  statut: {
    type: String,
    enum: ['en attente', 'en cours', 'prêt'],
    default: 'en attente',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  archive: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Commande", commandeSchema);