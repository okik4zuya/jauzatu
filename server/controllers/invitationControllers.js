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
  const invitation = await Invitation.findById(req.params.id);

  if (invitation.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action!");
  }
  if (invitation) {
    invitation.slug = req.body.slug;
    invitation.tema = req.body.tema;
    invitation.namaLengkapPria = req.body.namaLengkapPria;
    invitation.namaPria = req.body.namaPria;
    invitation.namaLengkapWanita = req.body.namaLengkapWanita;
    invitation.namaWanita = req.body.namaWanita;
    invitation.waktuAkad = req.body.waktuAkad;
    invitation.waktuResepsi = req.body.waktuResepsi;
    invitation.lokasiAkad = req.body.lokasiAkad;
    invitation.lokasiResepsi = req.body.lokasiResepsi;
    invitation.teksTanggalDepan = req.body.teksTanggalDepan;
    invitation.teksSalamPembuka = req.body.teksSalamPembuka;
    invitation.teksPendahuluan = req.body.teksPendahuluan;
    invitation.teksHariAkad = req.body.teksHariAkad;
    invitation.teksTanggalAkad = req.body.teksTanggalAkad;
    invitation.teksJamAkad = req.body.teksJamAkad;
    invitation.teksHariResepsi = req.body.teksHariResepsi;
    invitation.teksTanggalResepsi = req.body.teksTanggalResepsi;
    invitation.teksJamResepsi = req.body.teksJamResepsi;
    invitation.teksBulan = req.body.teksBulan;
    invitation.teksTahun = req.body.teksTahun;
    invitation.teksOrangTuaPria = req.body.teksOrangTuaPria;
    invitation.teksOrangTuaWanita = req.body.teksOrangTuaWanita;
    invitation.teksAyat = req.body.teksAyat;
    invitation.teksPenutup = req.body.teksPenutup;
    invitation.teksSalamPenutup = req.body.teksSalamPenutup;
    invitation.teksKamiYangBerbahagia = req.body.teksKamiYangBerbahagia;
    invitation.teksKelPria = req.body.teksKelPria;
    invitation.teksKelWanita = req.body.teksKelWanita;
    invitation.fitur = req.body.fitur;
    invitation.dataFitur = req.body.dataFitur;
    invitation.loveJourney = req.body.loveJourney;
    invitation.galeri = req.body.galeri;

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
      tema: "Tema Snow Clean",
      namaLengkapPria: "Fulan Ahmad",
      namaPria: "Fulan",
      namaLengkapWanita: "Fulanah Aisyah",
      namaWanita: "Fulanah",
      waktuAkad: "20 Februari 2022",
      waktuResepsi: "20 Februari 2022",
      lokasiAkad: "Masjid PUSDAI, Jl. Diponegoro No. 20, Kota Bandung",
      lokasiResepsi: "Masjid PUSDAI, Jl. Diponegoro No. 20, Kota Bandung",
      linkGoogleMaps: "https://google.maps",
      iFrameGoogleMaps:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9208683435095!2d107.62368131382961!3d-6.900067195014147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b394d93a91%3A0x6cd6a249b02f7!2sMasjid%20Pusdai!5e0!3m2!1sen!2sid!4v1644944454894!5m2!1sen!2sid",

      // Data Konten - Teks
      teksTanggalDepan: "01 . 01 . 2022",
      teksSalamPembuka: "Assalamu'alaikum Wr. Wb.",
      teksPendahuluan:
        "Dengan memohon rahmat Allah swt, insyaAllah kami akan menyelenggarakan akad nikah:",
      teksHariAkad: "Sabtu",
      teksTanggalAkad: "20",
      teksJamAkad: "09.00",
      teksHariResepsi: "Sabtu",
      teksTanggalResepsi: "20",
      teksJamResepsi: "10.00",
      teksBulan: "Februari",
      teksTahun: "2022",
      teksOrangTuaPria: "Putra ke-2 dari Bapak Ahmad dan Ibu Hamidah",
      teksOrangTuaWanita: "Putra ke-3 dari Bapak Halim dan Ibu Halimah",
      teksAyat:
        '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir. QS. Ar-Rum: 21"',
      teksPenutup:
        "Merupakan seuatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/I dapat berkenan hadir dan memberikan doa restu dalam acara pernikahan kami",
      teksSalamPenutup: "Wassalamu'alaikum Wr. Wb.",
      teksKamiYangBerbahagia: "Nama Wanita & Nama Pria",
      teksKelPria: "Kel. Bpk. Ahmad dan Ibu Hamidah",
      teksKelWanita: "Kel. Bpk. Halim dan Ibu Halimah",
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
