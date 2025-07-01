const mongoose = require("mongoose");
const student = require("../model/client");
const { use } = require("react");
//const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const signup = (req, res, next) => {
    //console.log(req.body);

    let Client = new student(
        {
            name: req.body.name,
            email: req.body.email,
            level: req.body.level,
            password: req.body.password
        }
    )

    Client.save()

        .then(response => {
            res.json({
                message: "Donne enregistrer avec succes !"
            })

        })

        .catch(error => {
            res.json({
                message: "Une erreur c' est produit durrant l' enregistrement de donne!"
            })
        })
    //console.log(Client);

}

const login = (req, res) => {

    console.log(req.body);

    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;

    student.findOne({ $or: [{ name: name }, {email: email}] })

        .then(user => {
            if (user) {
              
                 if (user.password === password ) {
                    console.log("connexion reussit");
                    let token = jwt.sign({name : user.name},'UneValeursecrete',{expiresIn:"1h"});
                    console.log(token);
                    
                    res.json(
                        {
                            message: "Compte existant",
                            token
                        }
                    )

                } else {
                    console.log("mot de passe introuvable");
                    //alert("Votre mot de passe est introuvable!")

                }

            } else {
                console.log("Compte inexistant!");
                

            }
        }
        )
        .catch(error => {
            console.log("Une erreur c' est produit!");
            
            res.json({
                message: "Erreur de connexion"
            })
        })
}



const dataUser = (requete,response) =>{
    student.find({})
        .then(user =>{
            //console.log("Voici les donnes de l' utilisateur :",);
            response.send(user);
            
        })
        .catch(err=>{
            console.log(err);
            
        })

}
module.exports = {
    signup, login,dataUser
};

