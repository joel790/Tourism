const Feedback = require('../models/feedbackModel');

// Create a new feedback
exports.createFeedback = async (req, res, next) => {
  try {
    const { tourist, rating, comment } = req.body;
    const feedback = await Feedback.create({ tourist, rating, comment });
    res.status(201).json({ success: true, feedback });
  } catch (error) {
    next(error);
  }
};

// Get all feedbacks
exports.getAllFeedbacks = async (req, res, next) => {
  try {
    const feedbacks = await Feedback.find().populate('tourist');
    res.status(200).json({ success: true, feedbacks });
  } catch (error) {
    next(error);
  }
};

// Get a single feedback by ID
exports.getFeedbackById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findById(id).populate('tourist');
    if (!feedback) {
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }
    res.status(200).json({ success: true, feedback });
  } catch (error) {
    next(error);
  }
};

// Update a feedback by ID
exports.updateFeedbackById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;
    const feedback = await Feedback.findByIdAndUpdate(
      id,
      { rating, comment },
      { new: true }
    );
    if (!feedback) {
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }
    res.status(200).json({ success: true, feedback });
  } catch (error) {
    next(error);
  }
};

// Delete a feedback by ID
exports.deleteFeedbackById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findByIdAndDelete(id);
    if (!feedback) {
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }
    res.status(200).json({ success: true, message: 'Feedback deleted' });
  } catch (error) {
    next(error);
  }
};
