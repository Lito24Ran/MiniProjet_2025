const Commande = require("../model/commande");

//cree comande
const ajouterCommande = async (req, res) => {
  try {
    const nouvelleCommande = new Commande(req.body);
    await nouvelleCommande.save();
    res.status(201).json(nouvelleCommande);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//obtenir toutes les commmande
const getCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find(); // récupère toutes les commandes
    res.status(200).json(commandes);
  } catch (err) {
    console.error("Erreur dans getCommandes:", err);
    res.status(500).json({ message: "Erreur serveur" });
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
