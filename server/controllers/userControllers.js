const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const getUsers = asyncHandler(async (req, res) => {
  if (req.user._id != process.env.SUPERADMIN_ID) {
    res.status(400);
    throw new Error("You can't perform this action!");
  } else {
    const users = await User.find();
    res.json(users);
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      invitationCreated: user.invitationCreated,
      accountType: user.accountType,
      token: generateToken(user._id),
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Error occured!");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      invitationCreated: user.invitationCreated,
      accountType: user.accountType,
      token: generateToken(user._id),
      pic: user.pic,
    });
  } else {
    throw new Error("Invalid Email or Password!");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    user.isAdmin = req.body.isAdmin; // || user.isAdmin;
    user.accountType = req.body.accountType;
    user.invitationCreated = req.body.invitationCreated; //|| user.invitationCreated;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      invitationCreated: updatedUser.invitationCreated,
      accountType: updatedUser.accountType,
      token: generateToken(updatedUser._id),
      pic: updatedUser.pic,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found!");
  }
});

const getUserAdmin = asyncHandler(async (req, res) => {
  const userAdmin = await User.find({ _id: process.env.SUPERADMIN_ID });
  res.json(userAdmin);
});

module.exports = {
  getUsers,
  registerUser,
  authUser,
  updateUserProfile,
  getUserAdmin,
};
