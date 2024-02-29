const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const menteeSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the username"],
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
    //Add domain
  },
  {
    timestamps: true,
  }
);

user.pre("save", async (next) => {
  const mentee = this;
  if (!mentee.isModified("password")) {
    return next();
  }
  try {
    const hashed_pass = await bcrypt.hash(mentee.password, 10);
    user.password = hashed_pass;
    next();
  } catch (e) {
    return next(e);
  }
});

const Mentee = mongoose.model("Mentee", menteeSchema);

module.exports = Mentee;
