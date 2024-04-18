const Mentor = require("../models/mentorModel");
const asyncHandler = require("express-async-handler");

const getMentorsController = asyncHandler(async (req, res) => {
  const mentors = await Mentor.find({ id: req.params.id });
  res.status(200).json(mentors);
});

const getMentorController = asyncHandler(async (req, res) => {
  const mentor = await Mentor.findById(req.params.id);
  if (!mentor) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(mentor);
});

module.exports.getMentorbyId = getMentorController;
module.exports.getallMentors = getMentorsController;
