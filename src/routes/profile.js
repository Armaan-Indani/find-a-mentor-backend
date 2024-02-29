const express = require("express");
const ProfileController = require("../controllers/profileController");
const ProfileUpdateController = require("../controllers/profileUpdateController");

const profile = express.Router();

profile.get("/", validateToken, ProfileController);
profile.post("/update", validateToken, ProfileUpdateController);

module.exports = profile;
