const Hotel = require("../models/hotelModel");
const asyncHandler = require("express-async-handler");

// Create a new Hotel
exports.createHotel = asyncHandler(async (req, res) => {
  const newHotel = await Hotel.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      Hotel: newHotel,
    },
  });

  res.status(400).json({
    status: "fail",
    message: error.message,
  });
});

// Get all Hotels
exports.getAllHotels = asyncHandler(async (req, res) => {
  const Hotels = await Hotel.find();
  if (Hotels) {
    res.status(200).json({
      data: {
        Hotels,
      },
    });
  } else {
    throw new Error("Hotel not found");
  }
});
// get a single Hotel
exports.getHotel = asyncHandler(async (req, res) => {
  const Hotel = await Hotel.findById(req.params.id);
  if (!Hotel) {
    return res.status(404).json({ message: "Hotel not found" });
  }
  res.status(200).json(Hotel);
});

// Update a Hotel by ID
exports.updateHotel = asyncHandler(async (req, res) => {
  const Hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!Hotel) {
    return res
      .status(404)
      .json({ status: "failed", message: "Hotel not found!" });
  }
  res.status(200).json({
    status: "success",
    data: {
      Hotel,
    },
  });

  res.status(400).json({
    status: "fail",
    message: error.message,
  });
});

// Delete a Hotel by ID
exports.deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
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
