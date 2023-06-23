const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["International", "National", "Religious", "Cultural"],
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },

    images: {
      type: Object,
      required: true,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);
const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
