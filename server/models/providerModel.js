const mongoose = require("mongoose");

const themeSchema = mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    tag: [{ type: String }],
    description: { type: String },
    demoLink: { type: String },
  },
  { timestamps: true }
);

const providerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    providerName: { type: String, required: true },
    music: [
      {
        title: { type: String },
        artist: { type: String },
        url: { type: String },
      },
    ],
    theme: [themeSchema],
  },
  {
    timestamps: true,
  }
);

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;
