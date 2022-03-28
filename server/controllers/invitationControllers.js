const asyncHandler = require("express-async-handler");
const Invitation = require("../models/invitationModel");

const getInvitationByUser = asyncHandler(async (req, res) => {
  const invitationByUser = await Invitation.find({ user: req.user._id });
  res.json(invitationByUser);
});

const getInvitationBySlug = asyncHandler(async (req, res) => {
  const invitationBySlug = await Invitation.find({ slug: req.params.slug });
  res.json(invitationBySlug);
});

const getInvitationById = asyncHandler(async (req, res) => {
  const invitation = await Invitation.findById(req.params.id);

  if (invitation) {
    res.json(invitation);
  } else {
    res.status(404).json({ message: "Invitation not found" });
  }
});

const updateInvitation = asyncHandler(async (req, res) => {
  const {
    slug,
    tema,
    namaLengkapPria,
    namaPria,
    namaLengkapWanita,
    namaWanita,
  } = req.body;

  const invitation = await Invitation.findById(req.params.id);

  if (invitation.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action!");
  }
  if (invitation) {
    invitation.slug = slug;
    invitation.tema = tema;
    invitation.namaLengkapPria = namaLengkapPria;
    invitation.namaPria = namaPria;
    invitation.namaLengkapWanita = namaLengkapWanita;
    invitation.namaWanita = namaWanita;
    const updatedInvitation = await invitation.save();
    res.json(updatedInvitation);
  } else {
    res.status(404);
    throw new Error("Invitation not found");
  }
});

const deleteInvitationById = asyncHandler(async (req, res) => {
  const invitation = await Invitation.findById(req.params.id);
  if (invitation.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action!");
  }
  if (invitation) {
    await invitation.remove();
    res.status(200).json({ message: "Invitation deleted successfully!" });
  } else {
    res.status(404);
    throw new Error("Invitation not found");
  }
});

const createInvitation = asyncHandler(async (req, res) => {
  const {
    slug,
    tema,
    namaLengkapPria,
    namaPria,
    namaLengkapWanita,
    namaWanita,
  } = req.body;

  if (!slug) {
    res.status(400);
    throw new Error("Isi slug terlebih dahulu!");
  } else {
    const invitation = new Invitation({
      user: req.user._id,
      slug,
      tema,
      namaLengkapPria,
      namaPria,
      namaLengkapWanita,
      namaWanita,
    });
    const createdInvitation = await invitation.save();
    res.status(201).json(createdInvitation);
  }
});

module.exports = {
  createInvitation,
  getInvitationByUser,
  getInvitationById,
  deleteInvitationById,
  updateInvitation,
  getInvitationBySlug,
};
