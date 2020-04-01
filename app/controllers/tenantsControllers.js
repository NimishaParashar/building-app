const Tenant = require("../models/tenant");
const axios = require("axios");

// (module.exports.create = upload.single("profile")),
//   (req, res) => {
//     try {
//       res.send(req.file);
//     } catch (err) {
//       res.send(400);
//     }
//   };

// app.post('/single', upload.single('profile'), (req, res) => {
//     try {
//       res.send(req.file);
//     }catch(err) {
//       res.send(400);
//     }
//   })

module.exports.show = function(req, res) {
  const name = req.body.name;

  axios
    .get(`https://gender-api.com/get?name=${name}&key=ucuPzhsmTUYoRTwVbu`)
    .then(function(result) {
      res.json(result.data.gender);
    });
  // https://gender-api.com/get?name=nimisha&key=ucuPzhsmTUYoRTwVbu
};
