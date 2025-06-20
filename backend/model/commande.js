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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Commande", commandeSchema);