const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");
const Tour = require("../models/tourModel");
const User = require("../models/userModel");
const TourGuide = require("../models/tourguideModel");

exports.createBooking = asyncHandler(async (req, res) => {
  const { tourguideId, tourId, date, numberOfPeople, contactNumber } = req.body;
  // Assuming you have defined the User and Tour schemas
  const tourGuide = await TourGuide.findById(tourguideId);
  const tour = await Tour.findById(tourId);
  if (!tourGuide || !tour) {
    res.status(400).json({ message: "User or tour not found" });
    return;
  }
  const newBooking = new Booking({
    tourGuide: tourGuide,
    tour: tour,
    date,
    numberOfPeople,
    contactNumber,
  });

  await newBooking.save();
  res.status(201).json({ message: "Booking created successfully" });
});

exports.getAllBookings = asyncHandler(async (req, res) => {
  const booking = await Booking.find();
  res.status(200).json({
    status: "success",
    data: {
      booking,
    },
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});
exports.getBooking = asyncHandler(async (req, res) => {
  const bookingId = req.params.bookingId;
  const booking = await Booking.findById(bookingId);
  res.status(200).json({
    status: "success",
    data: {
      booking,
    },
  });

  res.status(404).json({
    status: "fail",
    message: err.message,
  });
});

exports.updateBookingStatus = asyncHandler(async (req, res) => {
  const { bookingId } = req.params;
  const { status } = req.body;

  const booking = await Booking.findById(bookingId);

  if (!booking) {
    res.status(404);
    throw new Error("Booking not found");
  }

  booking.status = status;
  const updatedBooking = await booking.save();

  res.json(updatedBooking);
});

exports.deleteBooking = asyncHandler(async (req, res) => {
  const bookingId = req.params.bookingId;

  // Check if the booking exists
  const booking = await Booking.findById(bookingId);
  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  // Delete the booking
  await Booking.findByIdAndDelete(bookingId);

  res.json({ message: "Booking deleted successfully" });
});
