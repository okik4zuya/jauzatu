const express = require("express");
const {
  getInvitationByUser,
  getInvitationById,
  deleteInvitationById,
  createInvitation,
  updateInvitation,
  updateInvitationPublic,
  getInvitationBySlug,
} = require("../controllers/invitationControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router
  .route("/id/:id")
  .get(protect, getInvitationById)
  .delete(protect, deleteInvitationById)
  .put(protect, updateInvitation);
router
  .route("/public/id/:id")
  .get(getInvitationById)
  .put(updateInvitationPublic);
router.route("/slug/:slug").get(protect, getInvitationBySlug);
router.route("/userid").get(protect, getInvitationByUser);
router.route("/create").post(protect, createInvitation);

module.exports = router;
