const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");

exports.createBooking = asyncHandler(async(req,res)=>{
    const { userId, tourId, date } = req.body;
    const newBooking = new Booking({
      user: userId,
      tour: tourId,
      date,
    });

    await newBooking.save();

    res.status(201).json({ message: 'Booking created successfully' });

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
  const bookingId=req.params.bookingId;
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
    throw new Error('Booking not found');
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