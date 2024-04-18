const express = require("express");
const MentorController = require("../controllers/mentorController");
const validateToken = require("../middleware/validateTokenHandler");

const getMentor = express.Router();

getMentor.use(validateToken);

getMentor.route("/").get(MentorController.getallMentors);
getMentor.route("/:id").get(MentorController.getMentorbyId);

module.exports = getMentor;
