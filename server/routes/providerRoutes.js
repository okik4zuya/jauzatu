const express = require("express");
const {
  getProvider,
  getProviderById,
  createProvider,
  deleteProviderById,
  updateProviderById,
} = require("../controllers/providerControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getProvider);
router.route("/create").post(protect, createProvider);
router
  .route("/:id")
  .get(getProviderById)
  .put(protect, updateProviderById)
  .delete(protect, deleteProviderById);

module.exports = router;
