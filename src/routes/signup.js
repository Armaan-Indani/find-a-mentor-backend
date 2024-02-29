const express = require("express");
const SignUpController = require("../controllers/signupController");

const signup = express.Router();

signup.post("/", SignUpController);

module.exports = signup;
