const express = require("express");
const multer = require("multer");
const router = express.Router();
const { getProduits, addProduit } = require("../controleurs/produitControleur");

// Configuration Multer pour inserer les images dans mongo et en creer un lien
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.get("/", getProduits);
router.post("/", upload.single("img"), addProduit); // ajout avec image

module.exports = router;