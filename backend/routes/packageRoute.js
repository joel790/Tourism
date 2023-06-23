const express = require("express");
const { protect, tourGuide } = require("../moddleWare/authMiddleware");

const {
  createPackage,
  updatePackage,
  getPackages,
  getPackage,
  deletePackage,
} = require("../controllers/packageController");

const router = express.Router();
router.get("/", getPackages);
router.post("/", protect, tourGuide, createPackage);
// router.patch("/:id",updatePackage);
router.get("/:id", protect, getPackage);
router.delete("/:id", deletePackage);
module.exports = router;
