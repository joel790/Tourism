const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

// Define routes for profiles
router.post("/", profileController.createProfile);
router.get("/id", profileController.getProfileById);
router.put("/:id", profileController.updateProfileById);

module.exports = router;
