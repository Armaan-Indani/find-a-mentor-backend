const express = require("express");

const LoginController = async (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  email = email.toLowerCase();

  res.status(200);
  res.json({ Message: "LoginController Route is working" });
};

module.exports = LoginController;
