const express = require("express");
const LoginController = require("../controllers/loginController");

const login = express.Router();

// login.post("/", LoginController);
login.post("/mentee", LoginController.mentee);
login.post("/mentor", LoginController.mentor);

module.exports = login;
