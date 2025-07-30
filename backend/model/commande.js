const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
  clientNom: String,
  niveau: String,
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
    enum: ['en attente', 'en cours', 'prêt'], // possibilite des commandes
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