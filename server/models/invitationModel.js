const mongoose = require("mongoose");

const invitationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
      type: String,
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
    linkGoogleMaps: {
      type: String,
    },
    iFrameGoogleMaps: {
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
