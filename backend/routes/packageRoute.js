const express = require("express");
const { protect,  } = require("../moddleWare/authMiddleware");

const {
  createPackage,
  getPackages,
  getPackage,
  deletePackage,
  updatePackage,
} = require("../controllers/packageController");

const router = express.Router();
router.get("/", getPackages);
router.post("/", createPackage);
router.put("/:id", updatePackage);

router.get("/:id", protect, getPackage);
router.delete("/:id", deletePackage);
module.exports = router;
