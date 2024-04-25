const bcrypt = require("bcrypt");
const Mentor = require("../models/mentorModel");
const Mentee = require("../models/menteeModel");

const MentorProfileUpdateController = async (req, res) => {
  try {
    const mentor = await Mentor.findOne({ email: req.user.email });
    if (!mentor) {
      res.status(404);
      throw new Error("Mentor not found");
    }

    const { password } = req.body;

    //Upating email is not allowed
    if (req.body.email && req.body.email != mentor.email) {
      throw new Error("Email update is not allowed");
    }

    if (password) {
      hashedPass = await bcrypt.hash(password, 10);
      req.body.password = hashedPass;
    }

    const updatedMentor = await Mentor.findByIdAndUpdate(mentor.id, req.body, {
      new: true,
    });

    console.log(mentor);
    res.status(200);
    res.json(updatedMentor);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
};

const MenteeProfileUpdateController = async (req, res) => {
  try {
    const mentee = await Mentee.findOne({ email: req.user.email });
    if (!mentee) {
      res.status(404);
      throw new Error("Mentee not found");
    }

    const { password } = req.body;

    //Upating email is not allowed
    if (req.body.email && req.body.email != mentee.email) {
      throw new Error("Email update is not allowed");
    }

    if (password) {
      hashedPass = await bcrypt.hash(password, 10);
      req.body.password = hashedPass;
    }

    const updatedMentee = await Mentee.findByIdAndUpdate(mentee.id, req.body, {
      new: true,
    });

    console.log(mentee);
    res.status(200);
    res.json(updatedMentee);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
};

module.exports.mentor = MentorProfileUpdateController;
module.exports.mentee = MenteeProfileUpdateController;
