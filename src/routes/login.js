const express = require("express");
const LoginController = require("../controllers/loginController");

const login = express.Router();

login.post("/", LoginController);
// login.post("/mentee", MenteeLoginController);
// login.post("/mentor", MentorLoginController);

module.exports = login;
