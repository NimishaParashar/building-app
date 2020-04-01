const Amenities = require("../models/amenity");

module.exports.list = (req, res) => {
  Amenities.find()
    .then(amenities => {
      res.json(amenities);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const amenities = new Amenities(body);
  amenities
    .save()
    .then(amenities => {
      res.json(amenities);
    })
    .catch(err => {
      res.json(err);
    });
};
module.exports.show = (req, res) => {
  const id = req.params.id;
  Amenities.findById(id)
    .then(amenity => {
      res.json(amenity);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Amenities.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then(amentities => {
      res.json(amentities);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Amenities.findByIdAndDelete(id)
    .then(amenity => {
      res.json(amenity);
    })
    .catch(err => {
      res.json(err);
    });
};
