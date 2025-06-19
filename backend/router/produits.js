const express = require("express");
const router = express.Router();
const { getProduits } = require("../controleurs/produitControleur");

router.get("/", getProduits);

module.exports = router;