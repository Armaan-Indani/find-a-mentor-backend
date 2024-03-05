const asyncHandler = require("express-async-handler");
const Mentor = require("../models/mentorModel");
const Mentee = require("../models/menteeModel");

const MentorProfileController = asyncHandler(async (req, res) => {
  //   console.log("\n\n id = ", req.params.id);
  const mentor = await Mentor.findById(req.params.id);
  if (!mentor) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(mentor);
});

const MenteeProfileController = asyncHandler(async (req, res) => {
  //   console.log("\n\n id = ", req.params.id);
  const mentee = await Mentee.findById(req.params.id);
  if (!mentee) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(mentee);
});

module.exports.mentor = MentorProfileController;
module.exports.mentee = MenteeProfileController;
