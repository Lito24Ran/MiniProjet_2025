const Commande = require("../model/commande");

//cree comande
const ajouterCommande = async (req, res) => {
  try {
    const nouvelleCommande = new Commande(req.body);
    await nouvelleCommande.save();
    res.status(201).json({ message: "Commande enregistree avec succes" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de l'enregistrement de la commande " });
  }
};

//obtenir toutes les commmande
const getCommandes = async (req, res) => {
  try {
    const commandes = new Commande.find();
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la recuperation" });
  }
};

//obtenir commande by Id
const getCommandeById = async (req, res) => {
  try {
    const commande = new Commande.findById(req.params.id);
    if (!commande) return res.status(404).json({ error: "non trouve" });
    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ error: "Erreur server" });
  }
};

//mofidier une commande
const updateCommande = async (req, res) => {
  try {
    const commande = new Commande.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!commande) return res.status(404).json({ error: "non trouve" });
    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ error: "Erreur de modification" });
  }
};

//suprrimer la commande
const deleteCommandes = async (req, res) => {
  try {
    const result = new Commande.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "non trouve" });
    res.status(200).json({ message: "Commande suprimee" });
  } catch (error) {
    res.status(500).json({ error: "Erreur de suppression" });
  }
};

module.exports = {
  ajouterCommande,
  getCommandes,
  getCommandeById,
  updateCommande,
  deleteCommandes,
};
