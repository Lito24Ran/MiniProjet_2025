const mongoose = require("mongoose");
const student = require("../model/client");
const { use } = require("react");
//const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { data } = require("react-router-dom");

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

    //console.log(req.body);

    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;

    student.findOne({ $or: [{ name: name }, { email: email }] })

        .then(user => {
            if (user) {

                if (user.password === password) {
                    console.log("connexion reussit");
                    let token = jwt.sign({ name: user.name }, 'UneValeursecrete', { expiresIn: "1h" });
                    console.log(token);
                    console.log(
                        {
                            nom: user.name,
                            email: user.email,
                            level: user.level,
                        }
                    )
                    
                    if (token) {
                        return res.sendFile({
                            nom: user.name,
                            email: user.email,
                            level: user.level   
                        })

                    }
                }
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

        } 
        
    )
        .catch (error => {
    console.log("Une erreur c' est produit!");

    res.json({
        message: "Erreur de connexion"
    })
})
}

const Authentification = (req, res, next) => {
    const autHeader = req.headers.authorization;

    const token = autHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const decoded = jwt.verify(token, "Unevaleursecrete");
        req.userId = decoded.userId; // On récupère l'ID de l'utilisateur
        next();
    } catch (error) {
        console.log("Une erreur de token qui est inavalide!");

    }
}
const getToken = async (req, res, next) => {
    try {
        const reponse = await fetch("http://localhost:1203/login"); // Attendre que la réponse arrive
        const dataUser = await reponse.json(); // Attendre que la réponse soit convertie en JSON
        const rawText = await reponse.text(); 
        console.log("Contenu brut reçu :\n", rawText);

        console.log(dataUser.nom); // Affiche le nom dans la console

        res.send({ nom: dataUser.nom }); // Renvoyer une réponse correcte au client
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération des données" });
    }
};


const dataUser = (requete, response) => {
    student.find({})
        .then(user => {
            //console.log("Voici les donnes de l' utilisateur :",);
            response.send(user);

        })
        .catch(err => {
            console.log(err);

        })

}

const ChangePass = (requeste, response) => {
    console.log(requeste.body);
    const getid = requeste.params.id;
    console.log(getid);

    let passChange = requeste.body.passChange;

    student.findByIdAndUpdate(getid, { $set: { password: passChange } })
        .then(change => {
            response.json({
                message: "Password updating"
            })
            console.log("Password updating");

        }

        )
        .catch(err => {
            response.json(
                { message: "Une erreur c' est produit" }
            )
            console.log(err);

        }
            /* console.log("Une erreur c' est produit") */

        )

}
module.exports = {
    signup, login, dataUser, Authentification, ChangePass, getToken
};

