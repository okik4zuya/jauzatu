const dotenv = require("dotenv");
const asyncHandler = require("express-async-handler");
const Provider = require("../models/providerModel");

dotenv.config();

const getProvider = asyncHandler(async (req, res) => {
  const provider = await Provider.find({ user: req.user._id });
  res.json(provider);
});

const getProviderById = asyncHandler(async (req, res) => {
  const provider = await Provider.findById(req.params.id);

  if (provider) {
    res.json(provider);
  } else {
    res.status(404).json({ message: "Provider not found" });
  }
});

const createProvider = asyncHandler(async (req, res) => {
  if (req.user._id != process.env.SUPERADMIN_ID) {
    res.status(400);
    throw new Error("You can't perform this action!");
  } else {
    const provider = new Provider({
      user: req.user._id,
      providerName: req.body.providerName,
    });
    const createdProvider = await provider.save();
    res.status(201).json(createdProvider);
  }
});

const deleteProviderById = asyncHandler(async (req, res) => {
  const provider = await Provider.findById(req.params.id);
  if (provider.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action!");
  }
  if (provider) {
    await provider.remove();
    res.status(200).json({ message: "Provider deleted successfully!" });
  } else {
    res.status(404);
    throw new Error("Provider not found");
  }
});

const updateProviderById = asyncHandler(async (req, res) => {
  const provider = await Provider.findById(req.params.id);

  if (provider.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action!");
  }
  if (provider) {
    provider.providerName = req.body.providerName;
    provider.music = req.body.music;
    provider.theme = req.body.theme;

    const updatedProvider = await provider.save();
    res.json(updatedProvider);
  } else {
    res.status(404);
    throw new Error("Provider not found");
  }
});

module.exports = {
  createProvider,
  getProvider,
  getProviderById,
  deleteProviderById,
  updateProviderById,
};
