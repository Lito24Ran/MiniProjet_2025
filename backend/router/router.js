const express = require("express");
const AllController = require("../collection/sign");
const fandoavamBola = require("../collection/paye")
const router = express.Router();


router.get("/dataUser", AllController.dataUser);
router.post("/signup",AllController.signup );
router.post("/login",AllController.login);
router.post("/payement",fandoavamBola.payement);
router.post("/payementMvola", fandoavamBola.payementMvola)


module.exports = router;