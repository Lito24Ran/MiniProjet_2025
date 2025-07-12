const mongoose = require('mongoose');
const Produit = require('./model/produits');

mongoose.connect('mongodb://localhost:27017/GeIt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const produits = [
  // insertion du Jus
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

  // insertion du Burger
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

  // insertion du Dessert
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

  // insertion du Riz
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

  // pour la Soupe
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

async function insertProduits() {
  try {
    await Produit.insertMany(produits);
    console.log("✅ Produits insérés avec succès !");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Erreur d'insertion :", err);
  }
}

insertProduits();