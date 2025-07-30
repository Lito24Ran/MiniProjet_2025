const mongoose = require("mongoose");
const Produit = require("../model/produits");

// === Schémas temporaires pour clients et commandes === //
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

const Client = mongoose.model("Client", clientSchema);
const Commande = mongoose.model("Commande", commandeSchema);

// === Connexion à la base === //
mongoose.connect("mongodb://127.0.0.1:27017/GeIt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const produitsBase = [
  {
    nom: "Princi burger",
    description: "Viandes,frommages,Sauce bechamelle",
    prix: 25,
    img: "uploads/litoburger.jpg",
    quantite: 1,
  },
  {
    nom: "Pizza maison",
    description: "4Frommages,Viande,Poulet,Fruits de mer,Mortadelle,Oeufs durs",
    prix: 30,
    img: "uploads/pizzalito.jpg",
    quantite: 1,
  },
  {
    nom: "Soupe Machirou",
    description: "Viandes,vantans,Filets de poisson",
    prix: 20,
    img: "uploads/SOUPELITO.jpg",
    quantite: 1,
  },
  {
    nom: "Brochette Lito",
    description: "Viandes,Legumes,Sauces",
    prix: 5,
    img: "uploads/brochettelito.jpg",
    quantite: 1,
  },
  {
    nom: "Kebab Bunny",
    description: "Viandes en tranche,Sauce tomate",
    prix: 10,
    img: "uploads/kebab dnl.jpg",
    quantite: 1,
  },
  {
    nom: "bolog-naj",
    description: "Spaghetti,pure de tomate, mayonnaise,fromage",
    prix: 15,
    img: "uploads/min-sao lito.jpg",
    quantite: 1,
  },
  {
    nom: "Christo Tacos",
    description: "viandes,poulets,fromages,legumes,sauce maison",
    prix: 25,
    img: "uploads/tacos lito.jpg",
    quantite: 1,
  },
  {
    nom: "Chicken Vic",
    description: "poulets,sauce tomate pimente",
    prix: 20,
    img: "uploads/nuggets lito.jpg",
    quantite: 1,
  },
  {
    nom: "Sushi",
    description: "lorem ipsum dolor sit amet",
    prix: 30,
    img: "uploads/sushi lito.jpg",
    quantite: 1,
  },
];

const menuSpecialList = [
  {
    nom: "Special vendredi",
    description: "Pack de nouriture: pizza Gm, Soupe legume, jus orange",
    prix: 43000,
    quantite: 10,
    img: "uploads/pizza soupe.jpg",
    menuSpecial: true,
  },
  {
    nom: "Starlink",
    description: "2 caffe, 1 bol renverse",
    prix: 38000,
    quantite: 10,
    img: "uploads/cafe.jpeg",
    menuSpecial: true,
  },
  {
    nom: "Maika hody",
    description: "1 gallantry whiskey, 2 hamburger, 1 Mini gateaux",
    prix: 70000,
    quantite: 10,
    img: "uploads/whiski.jpg",
    menuSpecial: true,
  }
];

const produitsCategorie = [
  // Jus
  {
    nom: "Jus orange",
    description: "orange, eau, citron",
    prix: 10000,
    quantite: 10,
    img: "uploads/boisson1.jpg",
    categorie: "jus",
  },
  {
    nom: "caffe",
    description: "caffe, lait",
    prix: 12000,
    quantite: 10,
    img: "uploads/coffe.jpg",
    categorie: "jus",
  },
  {
    nom: "gallantry whiskey",
    description: "le meilleur des whiskey ",
    prix: 20000,
    quantite: 10,
    img: "uploads/whiskey.jpg",
    categorie: "jus",
  },
  // Burger
  {
    nom: "hamburger",
    description: "pains de forme ronde,un steak haché,salade,tomate,oignon,sauce",
    prix: 15000,
    quantite: 10,
    img: "uploads/hamberger.jpg",
    categorie: "burger",
  },
  {
    nom: "TACOS ITALIENE",
    description: "fromage cheddar râpé, oignons verts,coquilles pour tacos, crème sure",
    prix: 12000,
    quantite: 10,
    img: "uploads/tacos italiene.jpg",
    categorie: "burger",
  },
  {
    nom: "Frite",
    description: "Pommes de terre, Huile de canola,sel,poivre",
    prix: 5000,
    quantite: 10,
    img: "uploads/photoFrite.jpg",
    categorie: "burger",
  },
  // Dessert
  {
    nom: "Milk chocolat",
    description: "yaourt, lait, chocolat",
    prix: 15000,
    quantite: 10,
    img: "uploads/milkshake.jpg",
    categorie: "dessert",
  },
  {
    nom: "Pizza",
    description: "3 boules, ananas",
    prix: 14000,
    quantite: 10,
    img: "uploads/galce ananas.jpg",
    categorie: "dessert",
  },
  {
    nom: "Mini gateaux",
    description: "creme chantilli, frambouase",
    prix: 21000,
    quantite: 10,
    img: "uploads/mini gateaux.jpg",
    categorie: "dessert",
  },
  // Riz
  {
    nom: "riz special malagasy",
    description: "riz",
    prix: 20000,
    quantite: 10,
    img: "uploads/riz malagasy.jpg",
    categorie: "riz",
  },
  {
    nom: "bol renverse",
    description: "riz, crevette frit",
    prix: 20000,
    quantite: 10,
    img: "uploads/Riz special.jpg",
    categorie: "riz",
  },
  {
    nom: "Riz special",
    description: "riz noir, boullet de viande, tomate",
    prix: 20000,
    quantite: 10,
    img: "uploads/riz noir.jpg",
    categorie: "riz",
  },
  // Soupe
  {
    nom: "RAMEN",
    description: "carotte,oignon blanc,huile d'olive,Passata de tomates",
    prix: 20000,
    quantite: 10,
    img: "uploads/patebolognaise.jpg",
    categorie: "soupe",
  },
  {
    nom: "SOUPE CHINOISE",
    description: "oignon déshydraté, ail, épices, poudre de sauce soja",
    prix: 20000,
    quantite: 10,
    img: "uploads/soupe chinoise.jpg",
    categorie: "soupe",
  },
  {
    nom: "Soupe Legume",
    description: "eau, carotte, pomme de terre, CÉLERI-RAVE, tomate, oignon",
    prix: 20000,
    quantite: 10,
    img: "uploads/Soupe au legume.jpg",
    categorie: "soupe",
  },
];

const clients = [
  { name: "Alice", email: "alice@gmail.com", level: "vip" },
  { name: "Bob", email: "bob@yahoo.fr", level: "normal" },
];

const commandes = [
  {
    nomClient: "Alice",
    numeroCarte: "123456789",
    numeroTel: "0341234567",
    plats: { nomPlat: "Pizza Margarita", quantite: 2, prix: 9500 },
  },
  {
    nomClient: "Bob",
    numeroCarte: "987654321",
    numeroTel: "0347654321",
    plats: { nomPlat: "Burger Royal", quantite: 1, prix: 8000 },
  },
];

async function resetAndSeed() {
  try {
    // Nettoyage
    await Produit.deleteMany({});
    await Client.deleteMany({});
    await Commande.deleteMany({});
    console.log("🧹 Anciennes données supprimées");

    // Insertion
    await Produit.insertMany([...produitsBase, ...menuSpecialList, ...produitsCategorie]);
    await Client.insertMany(clients);
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
    await Commande.insertMany(commandes);

    console.log("✅ Toutes les données ont été insérées avec succès !");
  } catch (error) {
    console.error("❌ Erreur pendant l’insertion :", error);
  } finally {
    mongoose.disconnect();
  }
}

resetAndSeed();