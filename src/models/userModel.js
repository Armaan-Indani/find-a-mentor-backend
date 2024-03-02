const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the username"],
      validate: {
        validator: (str) => {
          return str.length > 5 && str.length < 21;
        },
        message: "Username length must be between 5 to 20 charecters",
      },
    },
    email: {
      type: String,
      required: [true, "Please add the email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please enter the user password"],
      validate: {
        validator: (str) => {
          return str.length > 7 && str.length < 21;
        },
        message: "Password length must be between 8 to 20 charecters",
      },
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
    domain: [
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
  {
    timestamps: true,
  }
);

User.pre("save", async (next) => {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const hashed_pass = await bcrypt.hash(user.password, 10);
    user.password = hashed_pass;
    next();
  } catch (e) {
    return next(e);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
