const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Mentor = require("../models/mentorModel");
const Mentee = require("../models/menteeModel");

const MenteeLoginController = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  email = email.trim();
  email = email.toLowerCase();

  const mentee = await Mentee.findOne({ email });

  if (!mentee) {
    console.log("Mentee not found");
  }

  if (mentee && (await bcrypt.compare(password, mentee.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          name: mentee.name,
          email: mentee.email,
          domain: mentee.domain,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30m",
      }
    );

    res.status(200);
    res.json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

const MentorLoginController = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  email = email.trim();
  email = email.toLowerCase();

  const mentor = await Mentor.findOne({ email });

  if (!mentor) {
    console.log("Mentor not found");
  }

  if (mentor && (await bcrypt.compare(password, mentor.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          name: mentor.name,
          email: mentor.email,
          domain: mentor.domain,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30m",
      }
    );

    res.status(200);
    res.json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

module.exports.mentee = MenteeLoginController;
module.exports.mentor = MentorLoginController;
