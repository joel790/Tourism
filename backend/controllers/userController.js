const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 characters");
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
    res.status(201).json({
      data: {
        user,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Login User
exports.loginUser = asyncHandler(async (req, res) => {
  //take inputs from the user
  const { email, password } = req.body;
  // Validate user input
  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter an email and a password");
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
    res.status(201).json({
      data: {
        user,
      },
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

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.role = req.body.role || user.role;

  const updatedUser = await user.save();

  res.json({
    data: {
      updatedUser,
    },
  });
});
