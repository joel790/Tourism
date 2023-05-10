// const express = require("express");
const Tour = require("../models/tourModel");
const asyncHandler = require("express-async-handler");

// Create a new tour
exports.createTour = asyncHandler(async (req, res) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      tour: newTour,
    },
  });

  res.status(400).json({
    status: "fail",
    message: error.message,
  });
});

// Get all tours
exports.getAllTours = asyncHandler(async (req, res) => {
  const tours = await Tour.find();
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
  res.status(404).json({
    status: "fail",
    message: error.message,
  });
});

// get a single tour
exports.getTour=asyncHandler(async(req,res)=>{
  const tour = await Tour.findById(req.params.id);
  if (!tour) {
    return res.status(404).json({message:"Tour not found"});
  }
  res.status(200).json(tour);

});

// Update a tour by ID
exports.updateTourById = asyncHandler(async (req, res) => {
  
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tour) {
      return res.status(404).json(
        {status:"failed", message:"Tour not found!"}
      )
    }
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
 
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  
});

// Delete a tour by ID
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
    
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
