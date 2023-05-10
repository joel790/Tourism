const TourGuide = require("../models/tourguideModel");
const asyncHandler = require("express-async-handler");

exports.createTourGuide = asyncHandler(async (req, res) => {
  const newTourGuide = await TourGuide.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      tourGuide: newTourGuide,
    },
  });

  res.status(400).json({
    status: "fail",
    message: err.message,
  });
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

exports.deleteTourGuide = async (req, res) => {
  await TourGuide.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
};
