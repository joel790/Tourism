const Notification = require("../models/notificationModel");

// Create a new notification
exports.createNotification = async (req, res, next) => {
  try {
    const { user, message } = req.body;
    const notification = await Notification.create({ user, message });
    res.status(201).json({ success: true, notification });
  } catch (error) {
    next(error);
  }
};

// Get all notifications
exports.getAllNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.find().populate("user");
    res.status(200).json({ success: true, notifications });
  } catch (error) {
    next(error);
  }
};

// Get a single notification by ID
exports.getNotificationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id).populate("user");
    if (!notification) {
      return res
        .status(404)
        .json({ success: false, message: "Notification not found" });
    }
    res.status(200).json({ success: true, notification });
  } catch (error) {
    next(error);
  }
};

// Update a notification by ID
exports.updateNotificationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const notification = await Notification.findByIdAndUpdate(
      id,
      { message },
      { new: true }
    );
    if (!notification) {
      return res
        .status(404)
        .json({ success: false, message: "Notification not found" });
    }
    res.status(200).json({ success: true, notification });
  } catch (error) {
    next(error);
  }
};

// Delete a notification by ID
exports.deleteNotificationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndDelete(id);
    if (!notification) {
      return res
        .status(404)
        .json({ success: false, message: "Notification not found" });
    }
    res.status(200).json({ success: true, message: "Notification deleted" });
  } catch (error) {
    next(error);
  }
};
