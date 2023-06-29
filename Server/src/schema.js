const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String },
    mobile: { type: Number },
    email: { type: String },
    password: { type: String },
    about: { type: String },
    address: { type: String },
  },
  { collection: "Users" }
);
module.exports = mongoose.model("Users", usersSchema);
