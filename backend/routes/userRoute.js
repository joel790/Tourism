const express= require("express");
const { registerUser, getUsers } = require("../controllers/userController");
const router=express.Router();


//Register a new user
router.post("/register",registerUser);
// Get all users
router.get("/", getUsers);

module.exports=router;
