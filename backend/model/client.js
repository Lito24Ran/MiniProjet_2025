const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const utilisateur = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
}, {
    timestamps: true
});

const student = mongoose.model("eleve", utilisateur);
module.exports = student;