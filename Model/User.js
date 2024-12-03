const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Users", UserSchema);
