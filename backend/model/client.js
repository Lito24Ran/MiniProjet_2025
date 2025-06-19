const mongoose = require("mongoose");
const schema = mongoose.Schema;

const clientSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  level: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Client", clientSchema);