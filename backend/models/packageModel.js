const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    guideId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TourGuide",
        required: true,
      },
    ],

    price: {
      type: Number,
      required: [true, "please enter the price"],
    },
    duration: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour",
        required: true,
        trim: true,
      },
    
    location: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour",
        required: true,
      },
    
    category: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour",
        required: true,
      },
    
    ratingsAverage: {
      type: Number,
      default: 0,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
   
    images: {
      type: Object,
      required: true,
      default: {},
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price;
        },
        message: "Discount price should be below regular price",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;