const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
  plats: {
    nomPlat: String,
    quantite: Number,
    prix: Number,
  },
  nomClient: String,
  numeroCarte: String,
  numeroTel: String,
  // date : {
  //     type: Date,
  //     default: Date.now.
  // },
});

module.exports = mongoose.model("Commande", commandeSchema);
