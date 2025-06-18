const express = require("express");
const AllController = require("../collection/sign");
const router = express.Router();


router.get("/dataUser", AllController.dataUser);
router.post("/signup",AllController.signup );
router.post("/login",AllController.login);


module.exports = router;