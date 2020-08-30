const mongoose = require("mongoose");

const PlateformeSchema = new mongoose.Schema({
  name: { type: String }
});

module.exports = Plateforme = mongoose.model("plateforme", PlateformeSchema);
