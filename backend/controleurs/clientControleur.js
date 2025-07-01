// controleurs/clientControleur.js
const Client = require('../model/client');

const getClients = async (req, res) => {
  try {
    const clients = await Client.find()
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur lors du fetch des clients' });
  }
};

module.exports = {
  getClients,
};