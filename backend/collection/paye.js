const payee = require("../model/payement");

const payement = (req,res) => {

    let payeCash = new payee (
        {
            typeDepayement : 'Payement par Cash',
            name : req.body.name,
            level : req.body.level
        }
    );
     payeCash.save()
     .then(() =>
        {
            res.json({
                message : "Payement reussit"
            })
            
        }
     )
     .catch(() =>{
        res.json(
            {
                message : "Erreur durant le payement!"
            }
        )
     }

     )
}

const payementMvola = (req,res) => {
    let payeMvola = new payee (
        {
            typeDepayement : 'Payement par Mvola',
            name : req.body.name,
            level : req.body.level
        }
    )
    payeMvola.save()
    .then(()=>{
        res.json({
            message : "Payement reussit avec Mvola"
        })
    })
    .catch(()=>{
        res.json({
            message : "Erreur durant le payement Mvola"
        })
    })
}

module.exports = {
    payement,payementMvola
}