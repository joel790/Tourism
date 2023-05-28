const express = require('express');
const { createTourGuide, getTourGuides, updateTourGuide, getTourGuide, deleteTourGuide } = require('../controllers/tourGuideController');
const router = express.Router();
router.get("/",getTourGuides);
router.post("/",createTourGuide);
router.patch("/:id",updateTourGuide);
router.get("/:id",getTourGuide);
router.delete("/:id",deleteTourGuide);

module.exports = router;