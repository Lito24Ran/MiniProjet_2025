const express = require("express");
const AllController = require("../collection/sign");
const fandoavamBola = require("../collection/paye");
const student = require("../model/client");
const router = express.Router();


router.get("/dataUser", AllController.dataUser);
router.post("/signup", AllController.signup);
router.post("/login", AllController.login);
/* router.get("/aboutClient", AllController.isAuthentification, async (req, res, next) => {
    try {
        const user = await student.findById(req.user._id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des données utilisateur" });
    }
}) */
router.post("/payement", fandoavamBola.payement);
router.post("/payementMvola", fandoavamBola.payementMvola);
router.post("/ChangePass/:id", AllController.ChangePass);
/* router.get("/getToken",AllController.getToken); */



module.exports = router;