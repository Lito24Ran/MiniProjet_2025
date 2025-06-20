
use GeIt

db.clients.insertMany([
  {
    name: "Alice",
    email: "alice@gmail.com",
    level: "vip"
  },
  {
    name: "Bob",
    email: "bob@yahoo.fr",
    level: "normal"
  }
]);
db.produits.insertMany([
  {
    nom: "Pizza Margarita",
    prix: 9500,
    quantite: 10,
    description: "Pizza classique avec fromage",
    nomClient: "Alice"
  },
  {
    nom: "Burger Royal",
    prix: 8000,
    quantite: 5,
    description: "Burger avec œuf et bacon",
    nomClient: "Bob"
  }
]);

db.commandes.insertMany([
  {
    nomClient: "Alice",
    numeroCarte: "123456789",
    numeroTel: "0341234567",
    plats: {
      nomPlat: "Pizza Margarita",
      quantite: 2,
      prix: 9500
    }
  },
  {
    nomClient: "Bob",
    numeroCarte: "987654321",
    numeroTel: "0347654321",
    plats: {
      nomPlat: "Burger Royal",
      quantite: 1,
      prix: 8000
    }
  }
]);