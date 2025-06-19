const Produit = require("../model/produits");

// GET : liste de produits
const getProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des produits" });
  }
};

// POST : ajouter un produit avec image
const addProduit = async (req, res) => {
  try {
    const { nom, prix, quantite, description } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const nouveauProduit = new Produit({
      nom,
      prix,
      quantite,
      description,
      img: imagePath, // sauvegarde de la chemin de l'image
    });

    await nouveauProduit.save();
    res.status(201).json(nouveauProduit);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout du produit" });
  }
};

module.exports = { getProduits, addProduit };