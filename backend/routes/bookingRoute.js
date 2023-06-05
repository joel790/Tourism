const express=require("express");
const { protect,user } = require("../moddleWare/authMiddleware");
const { getAllBookings, createBooking, updateBookingStatus, deleteBooking, getBooking } = require("../controllers/bookingController");

const router=express.Router();

router.post("/",protect,user,createBooking);
router.get("/",getAllBookings);
router.get("/:bookingId",getBooking);

router.put("/:bookingId",updateBookingStatus);
router.delete("/:id",deleteBooking);

module.exports = router;
