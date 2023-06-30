const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Define routes for notifications
router.post("/", notificationController.createNotification);
router.get("/", notificationController.getAllNotifications);
router.get("/", notificationController.getNotificationById);
router.put("/:id", notificationController.updateNotificationById);
router.delete("/:id", notificationController.deleteNotificationById);

module.exports = router;
