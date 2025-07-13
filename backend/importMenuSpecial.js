const mongoose = require("mongoose");
const Produit = require("./model/produits");

mongoose.connect("mongodb://127.0.0.1:27017/GeIt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

async function insertMenuSpecial() {
  try {
    await Produit.insertMany(menuSpecialList);
    console.log("✅ Menu spécial inséré avec succès !");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Erreur d'insertion :", err);
  }
}

insertMenuSpecial();