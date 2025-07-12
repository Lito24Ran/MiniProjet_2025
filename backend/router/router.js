const express = require("express");
const AllController = require("../collection/sign");
const fandoavamBola = require("../collection/paye");
const student = require("../model/client");
const router = express.Router();


router.get("/dataUser", AllController.dataUser);
router.post("/signup", AllController.signup);
router.post("/login", AllController.login);
router.get("/aboutClient", AllController.Authentification, async (req, res, next) => {
    try {
        const user = await student.findById(req._id).select('-password');

        if (!user) return console.log("Utilisateur introuvable");
         res.status(404).json({ message: "Utilisateur non trouvé" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
})
router.post("/payement", fandoavamBola.payement);
router.post("/payementMvola", fandoavamBola.payementMvola);


module.exports = router;