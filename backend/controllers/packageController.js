const asyncHandler = require("express-async-handler");
const Package = require("../models/packageModel");

exports.createPackage = asyncHandler(async (req, res) => {
  const { name, price, duration, category } = req.body;
  const userId = req.user.id; // Assuming you are using JWT authentication

  const newPackage = await Package.create({
    name,
    price,
    duration,
    category,
    userId,
  });
  res.status(201).json({
    status: "success",
    data: {
      newPackage,
    },
  });
  res.status(400).json({
    status: "fail",
    message: err.message,
  });
});
exports.getPackages = asyncHandler(async (req, res) => {
  const package = await Package.find({ userId: req.query.userId });
  res.status(200).json({
    status: "success",
    data: {
      package,
    },
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});

exports.getPackage = asyncHandler(async (req, res) => {
  const package = await Package.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      package,
    },
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});
exports.deletePackage = asyncHandler(async (req, res) => {
  await Package.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});
