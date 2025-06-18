const mongoose = require("mongoose");
const loadEnv = require("../loadEnvironment");

const connectDB = async () => {
  // mongoose.set("strictQuery", false);
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("connecte a mongodb");
  } catch (error) {
    console.error("error de connexion", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
