const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const zxcvbn = require("zxcvbn");
const jwt = require("jsonwebtoken");
const MIN_PASSWORD_SCORE = 3;

const generateToken = (id,isAdmin) => {
  return jwt.sign({ id,isAdmin}, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// register users
const registerUser = asyncHandler(async (req, res) => {
  const { name, password, email } = req.body;

  //check if email already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("Email already been registered.");
  }
  // check password strength
  const passwordLength = password.length;
  const passwordScore = zxcvbn(password).score;
  if (passwordScore < MIN_PASSWORD_SCORE) {
    res.status(400);
    throw new Error(
      `Password is too weak.
         1, Please use a password with at least ${passwordLength} characters,
         2, at least 1 upercase letter
         , 1 spcial character and numbers`
    );
  }

  //create/register new user and put to the database
  const user = await User.create({
    name,
    password,
    email,
  });
  //generate token
  const token = generateToken(user._id);

  //send httponly cookie to user
  res.cookie("token", token, {
    path: "/",
    expires: new Date(Date.now() + 86400000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  //response to created user data
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token,
  });
});

//login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check user existence
  const user = await User.findOne({ email });
  //if user exist and password matches
  //genetate tocken and send it to the client
  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id,user.isAdmin);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin, // Add isAdmin property to response
      token,
    });
  } else {
    res.status(401);
    throw new Error("user doesn't exist or Invalid email or password");
  }
});

const logoutUser=asyncHandler(async(req, res,)=>{
  res.send("successfully logedout");
});




//assign the user to be admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Check if the current user is an admin
  const currentUser = req.user;
  if (!currentUser || !currentUser.isAdmin) {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.isAdmin = req.body.isAdmin || user.isAdmin;

  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
  });
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  
};