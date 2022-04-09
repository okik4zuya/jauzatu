const express = require("express");
const {
  getInvitationByUser,
  getInvitationById,
  deleteInvitationById,
  createInvitation,
  updateInvitation,
  updateInvitationPublic,
  getInvitationBySlug,
  getAllInvitations,
  getInvitationList,
} = require("../controllers/invitationControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getAllInvitations);
router.route("/list").get(protect, getInvitationList);

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
