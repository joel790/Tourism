const mongoose=require("mongoose");

const hotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    distance:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    rooms:{
        type:[String],
        required:true,
    },
    cheapestPrice:{
        type:Number,
        required:true,
    },
    rating:{
        type:String,
        min:0,
        max:5,
    },
    featured: {
        type: Boolean,
        default: false,
      },
},{
    timestamps:true,
});

const Hotel= mongoose.model("Hotel",hotelSchema);

module.exports=Hotel;