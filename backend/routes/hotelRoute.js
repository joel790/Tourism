const express = require("express");
const {
  createHotel,
  getAllHotels,
  updateHotel,
  countByType,
  getHotel,
  deleteHotel,
  countByCity,
} = require("../controllers/hotelController");
const { hotel, protect } = require("../moddleWare/authMiddleware");
const router = express.Router();
router.get("/", getAllHotels);

router.get("/countbycity", countByCity);
router.get("/Countbytype", countByType);
router.post("/", protect, hotel, createHotel);
router.patch("/:id", protect, hotel, updateHotel);
router.get("/:id", getHotel);
router.delete("/:id", protect, hotel, deleteHotel);

module.exports = router;
