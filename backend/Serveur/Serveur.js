const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 1203;
const body_Parser = require("body-parser");
const mongoose = require("mongoose");
const router = require("../router/router");
const methodoverride = require('method-override');
const cors = require("cors")

const clientsRoute = require("../router/clients");
const produitsRoute = require("../router/produits");
const commandesRoute = require("../router/commandes");

app.use(cors());
app.use(body_Parser.urlencoded({extends:true}));
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/clients", clientsRoute);
app.use("/produits", produitsRoute);
app.use("/commandes", commandesRoute);

//Eto no fampidirana mongodb

mongoose.connect(
    "mongodb+srv://jorojanah:mongoJanahConnection@clusterkalyproject.vu8j3q7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterKalyProject",
    {
      dbName: "GeIt"
    }
  )
  .then(() => {
    console.log("✅ Connexion MongoDB Atlas réussie !");
  })
  .catch(err => {
    console.error("❌ Erreur de connexion :", err);
  });
  
  const db = mongoose.connection;  



app.use(methodoverride("_method"));

db.on('error',()=>{
    console.log("Une erreur c' est produit!");

})
db.once('open',()=>{
    console.log("Mongodb connecter avec succes!");
    
})

app.use(router);

/* app.get("/",()=>{
    console.log("Welcome in our web site");
    
}) */

app.listen(port,()=>{
    console.log(`Serveur creer avec succes au port ${port} !`);
    
})