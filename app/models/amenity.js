const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const amenitiesSchema = new Schema({
  name: {
    type: String
  }
});

const Amenities = mongoose.model("Amenities", amenitiesSchema);
module.exports = Amenities;
