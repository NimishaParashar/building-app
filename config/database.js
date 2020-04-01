const mongoose = require("mongoose");

const setUpDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/my-building-app", {
      useNewUrlParser: true
    })
    .then(() => {
      console.log("Conneted to db");
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = setUpDB;
