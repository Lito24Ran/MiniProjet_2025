const express = require('express');
const router = express.Router();
const Client = require('../models/ClientModel'); // modèle mongoose

// GET all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur lors du fetch des clients' });
  }
});

module.exports = router;