const Client = require("../model/client");

const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des clients" });
  }
};

module.exports = { getClients };