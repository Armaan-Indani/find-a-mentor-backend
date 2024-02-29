const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const mentorSchema = mongoose.Schema(
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
    //Add resume Link
    //Add domain
  },
  {
    timestamps: true,
  }
);

user.pre("save", async (next) => {
  const mentor = this;
  if (!mentor.isModified("password")) {
    return next();
  }
  try {
    const hashed_pass = await bcrypt.hash(mentor.password, 10);
    user.password = hashed_pass;
    next();
  } catch (e) {
    return next(e);
  }
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
