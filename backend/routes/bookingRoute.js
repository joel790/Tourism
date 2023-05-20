const express=require("express");
const { getAllBookings, createBooking, updateBookingStatus, deleteBooking, getBooking } = require("../controllers/bookingController");

const router=express.Router();

router.post("/",createBooking);
router.get("/",getAllBookings);
router.get("/:bookingId",getBooking);

router.put("/:bookingId",updateBookingStatus);
router.delete("/:bookingId",deleteBooking);

module.exports = router;
