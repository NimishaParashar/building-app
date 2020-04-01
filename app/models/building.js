const mongoose = require("mongoose");
const geo = require("geocoder");
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  contact: {
    type: Number
  },
  buildingTypes: {
    type: String
  },
  geo: {
    lat: {
      type: Number
    },
    long: {
      type: Number
    }
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Building = mongoose.model("Building", buildingSchema);
module.exports = Building;
