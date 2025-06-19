// Ceci est un script pour creer rapidement les données produits dans mongodb
// npm install multer (dans le dossier backend pour creer un lien entre les images et lo mongodb)

const mongoose = require("mongoose");
const Produit = require("./model/produits"); // adapte le chemin si besoin

// 🔗 Connexion à ta base locale
mongoose.connect("mongodb://127.0.0.1:27017/GeIt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const list = [
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

async function resetAndInsert() {
  try {
    await Produit.deleteMany({});
    console.log("🧹 Anciennes données supprimées");

    await Produit.insertMany(list);
    console.log("✅ Données insérées avec succès");

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Erreur :", err);
  }
}

resetAndInsert();