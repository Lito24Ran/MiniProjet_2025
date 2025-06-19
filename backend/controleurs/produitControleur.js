const Produit = require("../model/produits");

const getProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des produits" });
  }
};

module.exports = { getProduits };