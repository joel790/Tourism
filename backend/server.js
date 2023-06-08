const express= require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const dotenv=require("dotenv").config();
const cors=require("cors");
const userRoute=require("./routes/userRoute");
const feedbackRoutes = require('./routes/feedbackRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const profileRoutes = require('./routes/profileRoutes');
const errorHandler = require("./moddleWare/errorMiddleware");
const app=express();

const PORT=process.env.PORT ||5000


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())


//route middleware
app.use("/api/users", userRoute);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/profile', profileRoutes)


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