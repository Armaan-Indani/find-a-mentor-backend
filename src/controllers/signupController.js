const express = require("express");
const asyncHandler = require("express-async-handler");
const Mentor = require("../models/mentorModel");
const Mentee = require("../models/menteeModel");
const bcrypt = require("bcrypt");

const MentorSignUpController = asyncHandler(async (req, res) => {
  let { name, email, password, domain } = req.body;

  if (!name || !email || !password || !domain) {
    res.status(200);
    throw new Error("All fields needed");
  }
  const mentorAvailable = await Mentor.findOne({ email });

  if (mentorAvailable) {
    res.status(400);
    throw Error("Email is in use");
  }
  email = email.trim();
  email = email.toLowerCase();

  if (password.length < 7 || password.length > 20) {
    throw new Error("Password length must be 8 to 20 chars");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const mentor = await Mentor.create({
    name,
    email,
    password: hashedPassword,
    domain,
  });

  if (mentor) {
    console.log(`Mentor created for ${mentor}`);
    res.status(201);
    res.json({ _id: mentor.id, email: mentor.email });
  } else {
    res.status(400);
    throw new Error("Mentor data is not valid");
  }
});

const MenteeSignUpController = asyncHandler(async (req, res) => {
  let { name, email, password, domain } = req.body;

  if (!name || !email || !password || !domain) {
    res.status(200);
    throw new Error("All fields needed");
  }
  const menteeAvailable = await Mentee.findOne({ email });

  if (menteeAvailable) {
    res.status(400);
    throw Error("Email is in use");
  }
  email = email.trim();
  email = email.toLowerCase();

  if (password.length < 7 || password.length > 20) {
    throw new Error("Password length must be 8 to 20 chars");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const mentee = await Mentee.create({
    name,
    email,
    password: hashedPassword,
    domain,
  });

  if (mentee) {
    console.log(`Mentee created for ${mentee}`);
    res.status(201);
    res.json({ _id: mentee.id, email: mentee.email });
  } else {
    res.status(400);
    throw new Error("Mentee data is not valid");
  }
});

exports.mentee = MenteeSignUpController;
exports.mentor = MentorSignUpController;
