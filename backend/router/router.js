const express = require("express");
const AllController = require("../collection/sign");
const router = express.Router();

router.post("/signup",AllController.signup );
router.post("/login",AllController.login);
router.get("/dataUser", AllController.dataUser);

module.exports = router;