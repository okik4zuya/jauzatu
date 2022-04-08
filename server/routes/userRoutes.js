const express = require("express");
const {
  getUsers,
  registerUser,
  authUser,
  updateUserProfile,
  getUserAdmin,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser).get(protect, getUsers);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);
router.route("/useradmin").get(protect, getUserAdmin);

module.exports = router;
