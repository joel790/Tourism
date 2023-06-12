const Company = require("../models/companyModel");
const asyncHandler = require("express-async-handler");

exports.createCompany = asyncHandler(async (req, res) => {
  // Create a new tour company object with properties from the frontend
  const newCompany = new Company({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
  });

  // Save the new tour company company object to the database
  await newCompany.save();

  res
    .status(201)
    .json({ newCompany, message: "Tour  company created successfully" });
});

exports.getCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  if(!company){
    throw new Error( "Company not found")
  }
  res.status(200).json({
    status: "success",
    data: {
      company,
    },
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});
exports.getCompanys = asyncHandler(async (req, res) => {
  const company = await Company.find();
  if (!company) {
    throw new Error("No Company found");
    
  }
  res.status(200).json({
    status: "success",
    data: {
      company,
    },
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});
exports.updateCompany = asyncHandler(async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      company,
    },
  });

  res.status(400).json({
    status: "fail",
    message: err.message,
  });
});
exports.deleteCompany = asyncHandler(async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});
