const express = require('express');
const { createRoom, getAllRooms, updateRoom, getRoom, deleteRoom } = require('../controllers/roomController');
const router = express.Router();
router.get("/",  getAllRooms);
router.post("/",createRoom);
router.patch("/:id",updateRoom);
router.get("/:id",getRoom);
router.delete("/:id",deleteRoom);

module.exports = router;