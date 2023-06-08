const Profile = require('../models/profileModel');

// Createa profile
exports.createProfile = async (req, res, next) => {
  try {
    const { user, firstName, lastName, phoneNumber } = req.body;
    const profile = await Profile.create({ user, firstName, lastName, phoneNumber });
    res.status(201).json({ success: true, profile });
  } catch (error) {
    next(error);
  }
};

// Get profile by ID
exports.getProfileById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id).populate('user');
    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }
    res.status(200).json({ success: true, profile });
  } catch (error) {
    next(error);
  }
};

// Update a profile by ID
exports.updateProfileById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, phoneNumber } = req.body;
    const profile = await Profile.findByIdAndUpdate(
      id,
      { firstName, lastName, phoneNumber },
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }
    res.status(200).json({ success: true, profile });
  } catch (error) {
    next(error);
  }
};
