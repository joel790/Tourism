const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// register users
exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  if (password.length < 8) {
    res.status(400);
    throw new Error("Password must be up to 8 characters");
  }

  // Check if user email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email has already been registered");
  }

  // Create new user
  const user = await User.create({
    name,
    email,
    password,
  });

  //   Generate Token
  const token = generateToken(user._id);

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, name, email, role, photo, phone, password } = user;
    res.status(201).json({
      _id,
      name,
      email,
      role,
      photo,
      phone,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
// Login User
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate user input
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide an email and a password");
  }

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  // Check if password is correct
  const isPasswordMatched = await user.matchPassword(password);
  if (!isPasswordMatched) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  // Generate token
  const token = generateToken(user._id);

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, name, email, role, photo, phone } = user;
    res.status(201).json({
      _id,
      name,
      email,
      role,
      photo,
      phone,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

exports.logoutUser = asyncHandler(async (req, res) => {
  res.send("successfully logedout");
});

exports.getUsers = asyncHandler(async (req, res) => {
  const user = await User.find();
  if (user) {
    res.status(200).json({
      data: {
        user,
      },
    });
  } else {
    throw new Error("user not found");
  }
});

//get single user
exports.getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});
//assign the user to be admin
exports.updateUser = asyncHandler(async (req, res) => {
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
