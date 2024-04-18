const express = require("express");
const ProfileController = require("../controllers/profileController");
const ProfileUpdateController = require("../controllers/profileUpdateController");
const validateToken = require("../middleware/validateTokenHandler");

const profile = express.Router();

profile.get("/mentor/:id", ProfileController.mentor);
profile.put("/mentor/update", validateToken, ProfileUpdateController.mentor);

profile.get("/mentee/:id", ProfileController.mentee);
profile.put("/mentee/update", validateToken, ProfileUpdateController.mentee);

module.exports = profile;
