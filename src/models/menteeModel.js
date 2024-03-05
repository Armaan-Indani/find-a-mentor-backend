const mongoose = require("mongoose");

const menteeSchema = mongoose.Schema(
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
      required: [true, "Please enter the mentee password"],
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
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
    },
  },
  {
    timestamps: true,
  }
);

const Mentee = mongoose.model("Mentee", menteeSchema);

module.exports = Mentee;
