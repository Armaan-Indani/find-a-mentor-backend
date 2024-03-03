const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const ProfileUpdateController = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const { password } = req.body;

  //Upating email is not allowed
  if (req.body.email && req.body.email != user.email) {
    throw new Error("Email update is not allowed");
  }

  if (password) {
    hashedPass = await bcrypt.hash(password, 10);
    req.body.password = hashedPass;
  }

  const updatedUser = await User.findByIdAndUpdate(user.id, req.body, {
    new: true,
  });

  console.log(user);
  res.status(200);
  res.json(updatedUser);
});

module.exports = ProfileUpdateController;
