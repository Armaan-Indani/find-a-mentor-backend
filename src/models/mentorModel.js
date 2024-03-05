const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const mentorSchema = mongoose.Schema(
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
      required: [true, "Please enter the mentor password"],
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
    mentees: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Mentor",
          required: [true, "Add reference to mentee"],
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
