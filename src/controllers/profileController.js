const Mentor = require("../models/mentorModel");
const Mentee = require("../models/menteeModel");

const MentorProfileController = async (req, res) => {
  try {
    //   console.log("\n\n id = ", req.params.id);
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(mentor);
  } catch (err) {
    res.status(404).json({ error: err.toString() });
  }
};

const MenteeProfileController = async (req, res) => {
  try {
    //   console.log("\n\n id = ", req.params.id);
    const mentee = await Mentee.findById(req.params.id);
    if (!mentee) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(mentee);
  } catch (err) {
    res.status(404).json({ error: err.toString() });
  }
};

module.exports.mentor = MentorProfileController;
module.exports.mentee = MenteeProfileController;
