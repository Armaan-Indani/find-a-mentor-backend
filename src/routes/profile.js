const express = require("express");
const ProfileController = require("../controllers/profileController");
const ProfileUpdateController = require("../controllers/profileUpdateController");
const validateToken = require("../middleware/validateTokenhandler");

const profile = express.Router();

profile.get("/:id",validateToken, ProfileController);
profile.put("/update", validateToken, ProfileUpdateController);

// profile.get("/mentor/:id", ProfileController);
// profile.put("/mentor/update", validateToken, ProfileUpdateController);
// profile.get("/mentee/:id", ProfileController);
// profile.put("/mentee/update", validateToken, ProfileUpdateController);

module.exports = profile;
