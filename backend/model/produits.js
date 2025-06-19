const mongoose = require("mongoose");
const schema = mongoose.Schema;

const produitSchema = new schema({
  nom: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  quantite: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  nomClient: {
    type: String,
  }
});

module.exports = mongoose.model("Produit", produitSchema);