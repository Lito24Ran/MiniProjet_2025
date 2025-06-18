const express = require("express");
const connectDB = require("./db/conn");
const dotenv = require("dotenv").config();
// const cors = require("cors");
const postRoute = require("./routes/posts");
const loadEnv = require("./loadEnvironment");
const port = 5000;

require("dotenv").config();
const app = express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/post", require("./routes/posts"));

connectDB().then(() => {
  app.listen(port, () => console.log("le serveur a demare au port " + port));
});
