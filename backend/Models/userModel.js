const { Schema, model } = require("../connection");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmpassword: String,
  image: String,
  role: {
    type: String,
    defualt: "user",
  },
});
module.exports = model("user", userSchema);
