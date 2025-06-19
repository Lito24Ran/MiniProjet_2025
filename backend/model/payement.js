const mongoose = require("mongoose");
const schema = mongoose.Schema;

const utilisateur = new schema({
    typeDepayement :{
        type: String
    },
    name :{
        type :String,
        required: true,
    },
   
    level:{
        type :String,
        required :true,
        
    },

    
},{})

const payement  = mongoose.model("payement",utilisateur);

module.exports = payement;