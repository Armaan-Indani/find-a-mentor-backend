const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const SignUpController = asyncHandler(async (req, res) => {
  let { name, email, password, usertype, domain } = req.body;

  if (!name || !email || !password || !usertype || !domain) {
    res.status(200);
    throw new Error("All fields needed");
  }
  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw Error("Email is in use");
  }
  email = email.trim();
  email = email.toLowerCase();

  if (password.length < 7 || password.length > 20) {
    throw new Error("Password length must be 8 to 20 chars");
  }

  const hashedPass = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPass,
    usertype,
    domain,
  });

  console.log(`User created for ${user}`);

  if (user) {
    res.status(201);
  }

  res.status(200);
  res.json(user);
});

module.exports = SignUpController;
