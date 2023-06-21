const Hotel = require("../models/hotelModel");
const asyncHandler = require("express-async-handler");

// Create a new Hotel
exports.createHotel = asyncHandler(async (req, res) => {
  const newHotel = await Hotel(req.body);
  const savedHotel = await newHotel.save();
  res.status(201).json(savedHotel);
  res.status(400).json({
    status: "fail",
    message: error.message,
  });
});

// Get all Hotels
exports.getAllHotels = asyncHandler(async (req, res) => {
  const hotels = await Hotel.find();
  if (hotels) {
    res.status(200).json(hotels);
  } else {
    throw new Error("Hotel not found");
  }
});
exports.countByCity = asyncHandler(async (req, res) => {
  const cities = req.query.cities.split(",");
  const list = await Promise.all(
    cities.map((city) => {
      return Hotel.countDocuments({ city: city });
    })
  );
  if (list) {
    res.status(200).json(list);
  } else {
    throw new Error("Hotel not found");
  }
});
// get a single Hotel
exports.getHotel = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (!hotel) {
    return res.status(404).json({ message: "Hotel not found" });
  }
  res.status(200).json(hotel);
});

// Update a Hotel by ID
exports.updateHotel = asyncHandler(async (req, res) => {
  const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedHotel);

  res.status(400).json({
    status: "fail",
    message: error.message,
  });
});

// Delete a Hotel by ID
exports.deleteHotel = asyncHandler(async (req, res) => {
  await Hotel.findByIdAndDelete(req.params.id);
  res.status(204).json("hotel deleted successfully");

  res.status(400).json({
    status: "fail",
    message: error.message,
  });
});
