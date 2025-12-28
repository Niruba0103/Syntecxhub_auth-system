//Defines the User model schema for MongoDB
const mongoose = require("mongoose");

//Schema for User model
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

//Exports the User model
module.exports = mongoose.model("User", userSchema);
