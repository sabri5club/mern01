const mongoose = require("mongoose");

const PlateformeSchema = mongoose.Schema({
  name: {type: String, required:true
  },
});

module.exports = Plateforme = mongoose.model("plateforme", PlateformeSchema);
