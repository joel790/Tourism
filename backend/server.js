const express= require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const dotenv=require("dotenv").config();
const cors=require("cors");
const userRoute=require("./routes/userRoute");
const errorHandler = require("./moddleWare/errorMiddleware");
// const session= require("express-session");
const app=express();

const PORT=process.env.PORT ||5000


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())


//route middleware
app.use("/api/users",userRoute);


//routs
app.get('/',(req,res)=>{
    res.send("home page");
});


//error middleware
app.use(errorHandler);


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