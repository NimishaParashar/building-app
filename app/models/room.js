const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const roomSchema = new Schema({
  room_no: {
    type: String
  },
  occupancy: {
    type: Number
  },
  building: {
    type: Schema.Types.ObjectId,
    ref: "building"
  },
  price: {
    type: Number
  },
  amenities: [
    {
      amenity: {
        type: Schema.Types.ObjectId
      }
    }
  ],
  room_pics: {
    type: String
  }
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
