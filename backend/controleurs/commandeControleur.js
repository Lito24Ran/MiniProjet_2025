const Commande = require("../model/commande");

//cree comande
const ajouterCommande = async (req, res) => {
  try {
    console.log("Reçu :", req.body); //  Tres utile ceci hein
    const nouvelleCommande = new Commande(req.body);
    await nouvelleCommande.save();
    res.status(201).json(nouvelleCommande);
  } catch (err) {
    console.error("Erreur lors de l’enregistrement :", err); // et aussi ça
    res.status(500).json({ message: err.message });
  }
};

//obtenir toutes les commmande
const getCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find(); // on ne filtre rien
    console.log("Commandes trouvées :", commandes);
    res.status(200).json(commandes);
  } catch (err) {
    console.error("Erreur lors de la récupération des commandes :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

//obtenir commande by Id
const getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);
    if (!commande) return res.status(404).json({ error: "non trouve" });
    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ error: "Erreur server" });
  }
};

//mofidier une commande
const updateCommande = async (req, res) => {
  try {
    const updated = await Commande.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Supprimer un commande par Id
const deleteCommandeById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Commande.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }
    res.status(200).json({ message: "Commande supprimée avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = {
  ajouterCommande,
  getCommandes,
  getCommandeById,
  updateCommande,
  deleteCommandeById,
};