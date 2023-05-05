const express= require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const dotenv=require("dotenv").config();
const cors=require("cors");

const app=express();

const PORT=process.env.PORT ||5000

// connect to mongodb

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log(`mongodb connected`);
        app.listen(PORT,()=>{
            console.log(`server started on port ${PORT}`);
        })
    })
    .catch((err)=>{console.log(err)})  