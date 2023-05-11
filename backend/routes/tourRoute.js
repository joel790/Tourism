const express=require("express");
const { createTour, updateTourById, getAllTours, getTour, deleteTour } = require("../controllers/tourController");
// const { protect, admin } = require("../moddleWare/authMiddleware");

const router=express.Router();
router.get("/",getAllTours);
router.post("/",createTour);
router.patch("/:id",updateTourById);
router.get("/:id",getTour);
router.delete("/:id",deleteTour);
module.exports =router;