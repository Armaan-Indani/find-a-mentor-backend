const express = require("express");
const asyncHandler = require("express-async-handler");

const ProfileUpdateController = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  email = email.toLowerCase();

  res.status(200);
  res.json({ Message: "Update Profile Route" });
});

module.exports = ProfileUpdateController;
