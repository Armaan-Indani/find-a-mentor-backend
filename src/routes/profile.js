const express = require("express");
const ProfileController = require("../controllers/profileController");
const ProfileUpdateController = require("../controllers/profileUpdateController");
const validateToken = require("../middleware/validateTokenhandler");

const profile = express.Router();

profile.get("/", validateToken, ProfileController);
profile.put("/update", validateToken, ProfileUpdateController);

module.exports = profile;
