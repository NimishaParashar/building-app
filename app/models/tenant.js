const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const tenantSchema = new Schema({
  profile: {
    type: String
  },
  name: {
    type: String
  },
  gender: {
    type: String
  }
});

const Tenant = mongoose.model("Tenant", tenantSchema);
module.exports = Tenant;
