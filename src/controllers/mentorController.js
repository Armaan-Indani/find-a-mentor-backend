const Mentor = require("../models/mentorModel");

const getMentorsController = async (req, res) => {
  try {
    const mentors = await Mentor.find({ id: req.params.id });
    res.status(200).json(mentors);
  } catch (err) {
    res.status(404).json({ error: err.toString() });
  }
};

const getMentorController = async (req, res) => {
  try {
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
module.exports.getMentorbyId = getMentorController;
module.exports.getallMentors = getMentorsController;
