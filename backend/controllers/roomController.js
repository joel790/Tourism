const Hotel = require("../models/hotelModel");
const Room = require("../models/roomModel");

exports.createRoom = asyncHandler(async (req, res) => {
  const hotelId = req.params.hotelId;

  const newRoom = new Room(req.body);
  const savedRoom = await newRoom.save();
  await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
  res.status(201).json(savedRoom);

  res.status(400).json({
    status: "fail",
    message: error.message,
  });
});
// Get all Hotels
exports.getAllRooms = asyncHandler(async (req, res) => {
  const rooms = await Hotel.find();
  if (rooms) {
    res.status(200).json(rooms);
  } else {
    throw new Error("Room not found");
  }
});
// get a single Hotel
exports.getRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (!room) {
    return res.status(404).json({ message: "Room not found" });
  }
  res.status(200).json(Room);
});

// Update a Hotel by ID
exports.updateRoom = asyncHandler(async (req, res) => {
  const updatedRoom = await Room.findByIdAndUpdate(
     req.params.id,
    { $set: req.body },
    {new: true},
  );
  res.status(200).json(updatedRoom);

  res.status(400).json({
    status: "fail",
    message: error.message,
  });
});

// Delete a Hotel by ID
exports.deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(204).json("Room has been deleted");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};