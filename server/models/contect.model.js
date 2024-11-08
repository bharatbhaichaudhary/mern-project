const { Schema, model } = require("mongoose");

const contectSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contect = new model("contect", contectSchema)

module.exports = Contect