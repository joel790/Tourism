const asyncHandler = require("express-async-handler");
const Package = require("../models/packageModel");

exports.createPackage = asyncHandler(async (req, res) => {
    const newPackage = await Package.create(req.body);
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
    const package = await Package.find();
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
  exports.deletePackage =asyncHandler (async (req, res) => {
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
