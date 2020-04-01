const express = require("express");
const app = express();
const setUpDB = require("./config/database");
const port = 3040;
const geo = require("geocoder");
const router = require("./config/routes");
const multer = require("multer");

//db config
setUpDB();
app.use(express.json());
app.use("/", router);

// geo.geocode("Atlanta, GA", function(err, data) {
//   // do something with data
//   console.log(data);
// });

app.listen(port, () => {
  console.log("Listening to you ", port);
});
