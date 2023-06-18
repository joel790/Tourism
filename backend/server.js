const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./moddleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const tourGuideRoute = require("./routes/tourGuideRoute");
const companyRoute = require("./routes/companyRoute");
const tourRoute = require("./routes/tourRoute");
const bookingRoute = require("./routes/bookingRoute");
const packageRoute = require("./routes/packageRoute");
const hotelRoute = require("./routes/hotelRoute");
const roomRoute= require("./routes/roomRoute");
// const session= require("express-session");
const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://tourism-app.vercel.app"],
    credentials: true,
  })
);

//route middleware
app.use("/api/users", userRoute);
app.use("/api/tourguides", tourGuideRoute);
app.use("/api/companies", companyRoute);
app.use("/api/packages", packageRoute);
app.use("/api/tours", tourRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

//routes
app.get("/",(req,res)=>{
  res.send("home page")

});
//error middleware
app.use(errorHandler);


// connect to mongodb

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
