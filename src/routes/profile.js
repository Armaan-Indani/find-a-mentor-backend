const express = require("express");
const ProfileController = require("../controllers/profileController");

const profile = express.Router();

profile.post("/", validateToken, ProfileController);

module.exports = profile;
