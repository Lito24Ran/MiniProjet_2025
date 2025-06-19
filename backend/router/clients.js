const express = require("express");
const router = express.Router();
const { getClients } = require("../controleurs/clientControleur");

router.get("/", getClients);

module.exports = router;