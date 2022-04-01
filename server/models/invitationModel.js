const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    text: { type: String },
  },
  {
    timestamps: true,
  }
);
const loveJourneySchema = mongoose.Schema({
  title: { type: String },
  text: { type: String },
});
const invitationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    fitur: {
      countdown: { type: Boolean, default: false },
      audioLatar: { type: Boolean, default: false },
      galeri: { type: Boolean, default: false },
      googleMaps: { type: Boolean, default: false },
      loveJourney: { type: Boolean, default: false },
      pojokHadiah: { type: Boolean, default: false },
      rsvp: { type: Boolean, default: false },
      ucapan: { type: Boolean, default: false },
      customDomain: { type: Boolean, default: false },
    },
    dataFitur: {
      countdownDate: { type: Date, default: Date.now },
      countdownTime: { type: String, default: "09:00:00" },
      linkGoogleMaps: { type: String },
      iFrameGoogleMaps: { type: String },
    },
    comments: [commentSchema],
    loveJourney: [{ title: String, text: String }],

    slug: {
      type: String,
      required: true,
    },
    tema: {
      type: String,
      required: true,
    },
    namaLengkapPria: {
      type: String,
    },
    namaPria: {
      type: String,
    },
    namaLengkapWanita: {
      type: String,
    },
    namaWanita: {
      type: String,
    },

    // Data Konten - Data Acara
    waktuAkad: {
      type: Date,
    },
    waktuResepsi: {
      type: String,
    },
    lokasiAkad: {
      type: String,
    },
    lokasiResepsi: {
      type: String,
    },

    // Data Konten - Teks
    teksTanggalDepan: {
      type: String,
    },
    teksSalamPembuka: {
      type: String,
    },
    teksPendahuluan: {
      type: String,
    },
    teksHariAkad: {
      type: String,
    },
    teksTanggalAkad: {
      type: String,
    },
    teksJamAkad: {
      type: String,
    },
    teksHariResepsi: {
      type: String,
    },
    teksTanggalResepsi: {
      type: String,
    },
    teksJamResepsi: {
      type: String,
    },
    teksBulan: {
      type: String,
    },
    teksTahun: {
      type: String,
    },
    teksOrangTuaPria: {
      type: String,
    },
    teksOrangTuaWanita: {
      type: String,
    },
    teksAyat: {
      type: String,
    },
    teksPenutup: {
      type: String,
    },
    teksSalamPenutup: {
      type: String,
    },
    teksKamiYangBerbahagia: {
      type: String,
    },
    teksKelPria: {
      type: String,
    },
    teksKelWanita: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Invitation = mongoose.model("Invitation", invitationSchema);

module.exports = Invitation;
