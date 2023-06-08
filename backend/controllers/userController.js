const asyncHandler=require("express-async-handler");
const User = require("../models/userModel");
const bcrypt=require("bcryptjs")


const registerUser = asyncHandler(async (req, res) => {
  const { name, password, email } = req.body;

  //check if email already exist
  const userExist=await User.findOne({ email})
  if (userExist) {
    res.status(400)
    throw new Error("Email already been registered.");
    
  }
  // encrypt password before create user 
  const salt=await bcrypt.genSalt(10);
  const encryptedPassword=await bcrypt.hash(password,salt);


 //create/register new user and put to the database
 const user = await User.create({
    name,
    password:encryptedPassword,
    email
});
//response to created user data
res.status(201).json({
    _id:user._id,
    name:user.name,
    email:user.email,
    password:user.password,
    
});
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});


module.exports = {
  registerUser,
  getUsers,
};