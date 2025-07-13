const mongoose = require("mongoose");

// === Schémas temporaires === //
const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  level: String,
});

const commandeSchema = new mongoose.Schema({
  nomClient: String,
  numeroCarte: String,
  numeroTel: String,
  plats: {
    nomPlat: String,
    quantite: Number,
    prix: Number,
  },
});

const produitSchema = new mongoose.Schema({
  nom: String,
  prix: Number,
  quantite: Number,
  description: String,
  nomClient: String, // champ utilisé dans les données mock
});

// === Modèles === //
const Client = mongoose.model("Client", clientSchema);
const Produit = mongoose.model("Produit", produitSchema);
const Commande = mongoose.model("Commande", commandeSchema);

// === Connexion === //
mongoose
  .connect("mongodb://127.0.0.1:27017/GeIt")
  .then(async () => {
    console.log("✅ Connecté à MongoDB");

    // Nettoyer les anciennes données
    await Client.deleteMany({});
    await Produit.deleteMany({});
    await Commande.deleteMany({});

    // === Insertion === //
    await Client.insertMany([
      {
        name: "Alice",
        email: "alice@gmail.com",
        level: "vip",
      },
      {
        name: "Bob",
        email: "bob@yahoo.fr",
        level: "normal",
      },
    ]);

    await Produit.insertMany([
      {
        nom: "Pizza Margarita",
        prix: 9500,
        quantite: 10,
        description: "Pizza classique avec fromage",
        nomClient: "Alice",
      },
      {
        nom: "Burger Royal",
        prix: 8000,
        quantite: 5,
        description: "Burger avec œuf et bacon",
        nomClient: "Bob",
      },
    ]);

    await Commande.insertMany([
      {
        nomClient: "Alice",
        numeroCarte: "123456789",
        numeroTel: "0341234567",
        plats: {
          nomPlat: "Pizza Margarita",
          quantite: 2,
          prix: 9500,
        },
      },
      {
        nomClient: "Bob",
        numeroCarte: "987654321",
        numeroTel: "0347654321",
        plats: {
          nomPlat: "Burger Royal",
          quantite: 1,
          prix: 8000,
        },
      },
    ]);

    console.log("✅ Données insérées avec succès");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Erreur lors de la connexion ou l’insertion :", err);
  });