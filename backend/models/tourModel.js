const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
   
   
    category: {
      type: String,
      required: true,
      enum: {
        values: ["International", "National", "Religious", "Cultural"],
        message: "please enter the category",
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message: "Discount price ({VALUE}) should be below regular price",
      },
    },
    
    description: {
      type: String,
      required:[true,"please Add a discription"],
      trim: true,
    },
    
    images: {
        type:Object,
        required:[true,"please add the image"],
        default: {},
    },

  },
  {
    timestamps:true,
  });
module.exports = mongoose.model("Tour", tourSchema);