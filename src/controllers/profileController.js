const express = require("express");
const asyncHandler = require("express-async-handler");

const ProfileController = asyncHandler(async (req, res) => {
  res.status(200);
  res.json(req.user);
});

module.exports = ProfileController;
