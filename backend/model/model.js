const mongoose = require("mongoose");
const schema = mongoose.Schema;

const utilisateur = new schema({
    name :{
        type :String,
        required: true,
    },
    email:{
        type :String,
        required :true,
        unique :true
    },
    level:{
        type :String,
        required :true,
        
    },
    password:{
       type : String,
       minlenght: 8,
       required : true,
       
    },
    
},{})

const student = mongoose.model("eleve",utilisateur);

module.exports = student;