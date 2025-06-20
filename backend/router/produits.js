const express = require("express");
const multer = require("multer");
const router = express.Router();
const { getProduits, addProduit, deleteProduit, updateProduit } = require("../controleurs/produitControleur");

// Configuration Multer pour inserer les images dans mongo et en creer un lien
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.get("/", getProduits);
router.post("/", upload.single("img"), addProduit); // ajout avec image
router.put("/:id", upload.single("img"), updateProduit);
router.delete("/:id", deleteProduit);

module.exports = router;