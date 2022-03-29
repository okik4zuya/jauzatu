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
    waktuAkad,
    waktuResepsi,
    lokasiAkad,
    lokasiResepsi,
    linkGoogleMaps,
    iFrameGoogleMaps,
    teksTanggalDepan,
    teksSalamPembuka,
    teksPendahuluan,
    teksHariAkad,
    teksTanggalAkad,
    teksJamAkad,
    teksHariResepsi,
    teksTanggalResepsi,
    teksJamResepsi,
    teksBulan,
    teksTahun,
    teksOrangTuaPria,
    teksOrangTuaWanita,
    teksAyat,
    teksPenutup,
    teksSalamPenutup,
    teksKamiYangBerbahagia,
    teksKelPria,
    teksKelWanita,
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
    invitation.waktuAkad = waktuAkad;
    invitation.waktuResepsi = waktuResepsi;
    invitation.lokasiAkad = lokasiAkad;
    invitation.lokasiResepsi = lokasiResepsi;
    invitation.linkGoogleMaps = linkGoogleMaps;
    invitation.iFrameGoogleMaps = iFrameGoogleMaps;
    invitation.teksTanggalDepan = teksTanggalDepan;
    invitation.teksSalamPembuka = teksSalamPembuka;
    invitation.teksPendahuluan = teksPendahuluan;
    invitation.teksHariAkad = teksHariAkad;
    invitation.teksTanggalAkad = teksTanggalAkad;
    invitation.teksJamAkad = teksJamAkad;
    invitation.teksHariResepsi = teksHariResepsi;
    invitation.teksTanggalResepsi = teksTanggalResepsi;
    invitation.teksJamResepsi = teksJamResepsi;
    invitation.teksBulan = teksBulan;
    invitation.teksTahun = teksTahun;
    invitation.teksOrangTuaPria = teksOrangTuaPria;
    invitation.teksOrangTuaWanita = teksOrangTuaWanita;
    invitation.teksAyat = teksAyat;
    invitation.teksPenutup = teksPenutup;
    invitation.teksSalamPenutup = teksSalamPenutup;
    invitation.teksKamiYangBerbahagia = teksKamiYangBerbahagia;
    invitation.teksKelPria = teksKelPria;
    invitation.teksKelWanita = teksKelWanita;

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
  const { slug } = req.body;

  if (!slug) {
    res.status(400);
    throw new Error("Isi slug terlebih dahulu!");
  } else {
    const invitation = new Invitation({
      user: req.user._id,
      slug,
      tema: "1",
      namaLengkapPria: "1",
      namaPria: "1",
      namaLengkapWanita: "1",
      namaWanita: "1",
      waktuAkad: "1",
      waktuResepsi: "1",
      lokasiAkad: "1",
      lokasiResepsi: "1",
      linkGoogleMaps: "1",
      iFrameGoogleMaps: "1",
      teksTanggalDepan: "1",
      teksSalamPembuka: "1",
      teksPendahuluan: "1",
      teksHariAkad: "1",
      teksTanggalAkad: "1",
      teksJamAkad: "1",
      teksHariResepsi: "1",
      teksTanggalResepsi: "1",
      teksJamResepsi: "1",
      teksBulan: "1",
      teksTahun: "1",
      teksOrangTuaPria: "1",
      teksOrangTuaWanita: "1",
      teksAyat: "1",
      teksPenutup: "1",
      teksSalamPenutup: "1",
      teksKamiYangBerbahagia: "1",
      teksKelPria: "1",
      teksKelWanita: "1",
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
