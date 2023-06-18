const express = require('express');
const { createRoom, getAllRooms, updateRoom, getRoom, deleteRoom } = require('../controllers/roomController');
const { hotel } = require('../moddleWare/authMiddleware');
const router = express.Router();
router.get("/",  getAllRooms);
router.post("/",hotel,createRoom);
router.patch("/:id",hotel,updateRoom);
router.get("/:id",getRoom);
router.delete("/:id",hotel,deleteRoom);

module.exports = router;