const express = require("express");

const SignUpController = async (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  email = email.toLowerCase();

  res.status(200);
  res.json({ Message: "Profile Route is working" });
};

module.exports = SignUpController;
