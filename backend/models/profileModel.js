const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg?w=2000'
  },
  phoneNumber: {
    type: String,
    required: true,
    default:+251
  },
 country: {
    type: String,
    required: true
  },
 
});

module.exports = mongoose.model('Profile', profileSchema);
