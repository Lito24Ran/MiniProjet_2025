const Produit = require("../model/produits");

// GET : liste de produits
const getProduits = async (req, res) => {
  try {
    const produits = await Produit.find().sort({createdAt : -1}); // on fait le tri d'ordre decroissant ici
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des produits" });
  }
};

// GET pour des produits par catégorie
const getProduitsParCategorie = async (req, res) => {
  try {
    const produits = await Produit.find({ categorie: req.params.categorie }).sort({ createdAt: -1 });
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération par catégorie" });
  }
};

// GET pour le produits du menu spécial
const getMenuSpecial = async (req, res) => {
  try {
    const produits = await Produit.find({ menuSpecial: true }).sort({ createdAt: -1 });
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: "Erreur menu spécial" });
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
      img: imagePath, // sauvegarder de la chemin de l'image
    });

    await nouveauProduit.save();
    res.status(201).json(nouveauProduit);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout du produit" });
  }
};

const deleteProduit = async (req, res) => {
  try {
    await Produit.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Produit supprimé" });
  } catch (error) {
    res.status(500).json({ message: "Erreur suppression produit" });
  }
};

// PUT : mise à jour d’un produit
const updateProduit = async (req, res) => {
  try {
    const { nom, prix, quantite, description } = req.body;
    const imagePath = req.file ? req.file.path : undefined;

    const updated = {
      nom,
      prix,
      quantite,
      description,
    };

    if (imagePath) updated.img = imagePath;

    const produit = await Produit.findByIdAndUpdate(req.params.id, updated, {
      new: true,
    });

    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour du produit" });
  }
};

module.exports = { getProduits, addProduit, deleteProduit, updateProduit, getProduitsParCategorie, getMenuSpecial  };