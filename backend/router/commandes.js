const express = require("express");
const router = express.Router();
const Commande = require("../model/commande");
const {
  ajouterCommande,
  getCommandes,
  // getCommandesbById,
  updateCommande,
  // deleteCommandes,
  deleteCommandeById,
} = require("../controleurs/commandeControleur");

router.post("/", ajouterCommande);
router.get("/", getCommandes);
// router.get("/:id", getCommandesbById);
router.put("/:id", updateCommande);
router.delete("/:id", deleteCommandeById);

module.exports = router;