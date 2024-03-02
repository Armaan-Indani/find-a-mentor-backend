const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
    email: {
      type: String,
      required: [true, "Please add the email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please enter the user password"],
    },
    usertype: {
      type: String,
      required: [true, "Please enter the user-type"],
      validate: {
        validator: function (str) {
          return str == "mentor" || str == "mentee";
        },
        message: "Only mentor or mentee are the available options",
      },
    },
    domain: {
      type: [
        {
          type: String,
          required: [true, "Please enter domain-name"],
        },
      ],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "At least 1 domain is required",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
