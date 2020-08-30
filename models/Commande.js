const mongoose = require("mongoose");

const CommandeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  nom: {
    type: String,
    required: true,
  },
  plateforme: [
    {
      name: {
        type: String,
      },
    },
  ],
  statut: {
    type: String,
    required: false,
  },
  montant: {
    type: Number,
    required: false,
  },
  quantité: {
    type: Number,
    required: false,
  },
  urgence: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: false,
  },
  telephone: {
    type: String,
    required: false,
    unique: false,
  },
  transporteur: {
    type: String,
    required: true,
    unique: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Commande = mongoose.model("commande", CommandeSchema);
