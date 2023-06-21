const express = require('express');
const { createRoom, getAllRooms, updateRoom, getRoom, deleteRoom } = require('../controllers/roomController');
const { hotel, protect } = require('../moddleWare/authMiddleware');
const router = express.Router();
router.get("/",  getAllRooms);
router.post("/:hotelId",protect,hotel,createRoom);
router.patch("/:id",protect,hotel,updateRoom);
router.get("/:id",getRoom);
router.delete("/:id/:hotelId",protect,hotel,deleteRoom);

module.exports = router;