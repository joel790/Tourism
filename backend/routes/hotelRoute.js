const express = require('express');
const { createHotel, getAllHotels, updateHotel, getHotel, deleteHotel } = require('../controllers/hotelController');
const router = express.Router();
router.get("/",  getAllHotels);
router.post("/",createHotel);
router.patch("/:id",updateHotel);
router.get("/:id",getHotel);
router.delete("/:id",deleteHotel);

module.exports = router;