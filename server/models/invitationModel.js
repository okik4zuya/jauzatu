const mongoose = require("mongoose");

const invitationSchema = mongoose.Schema(
  {
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
      required: true,
    },
    namaPria: {
      type: String,
      required: true,
    },
    namaLengkapWanita: {
      type: String,
      required: true,
    },
    namaWanita: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Invitation = mongoose.model("Invitation", invitationSchema);

module.exports = Invitation;
