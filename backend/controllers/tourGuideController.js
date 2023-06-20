const TourGuide = require("../models/tourguideModel");
const asyncHandler = require("express-async-handler");
const Tour = require("../models/tourModel");

// Retrieve the tour object from the database using the tour ID from the frontend
exports.createTourGuide = asyncHandler(async (req, res) => {
  // Retrieve the tour object from the database using the tour ID from the frontend
  const tour = await Tour.findById(req.body.tourId);

  // Create a new tour guide object with properties from the frontend
  const newTourGuide = new TourGuide({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    languages: req.body.languages,
    bio: req.body.bio,
    availability: {
      weekdays: req.body.weekdays,
      weekends: req.body.weekends,
    },
    profilePicture: req.body.profilePicture,
  });

  // Add the tour object to the tours array of the new tour guide object
  newTourGuide.tours.push(tour);

  // Save the new tour guide object to the database
  await newTourGuide.save();

  res
    .status(201)
    .json({ newTourGuide, message: "Tour guide created successfully" });
});

exports.getTourGuide = asyncHandler(async (req, res) => {
  const tourGuide = await TourGuide.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      tourGuide,
    },
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});
exports.getTourGuides = asyncHandler(async (req, res) => {
  const tourGuide = await TourGuide.find();
  res.status(200).json({
    status: "success",
    data: {
      tourGuide,
    },
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});
exports.updateTourGuide = asyncHandler(async (req, res) => {
  const tourGuide = await TourGuide.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      tourGuide,
    },
  });

  res.status(400).json({
    status: "fail",
    message: err.message,
  });
});
exports.deleteTourGuide = asyncHandler(async (req, res) => {
  await TourGuide.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});
