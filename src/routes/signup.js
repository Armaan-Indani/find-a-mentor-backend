const express = require("express");
const SignUpController = require("../controllers/signUpController");

const signup = express.Router();

signup.post("/mentee", SignUpController.mentee);
signup.post("/mentor", SignUpController.mentor);

module.exports = signup;
