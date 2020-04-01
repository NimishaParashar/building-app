const Room = require("../models/room");

module.exports.list = (req, res) => {
  Room.find()
    .then(rooms => {
      res.json(rooms);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body.data;
  const file = req.file;
  console.log(file);
  console.log(JSON.parse(body));

  const room = new Room(JSON.parse(body));
  room.room_pics = JSON.stringify(req.file);

  room
    .save()
    .then(room => {
      res.json(room);

      // res.send(req.file);
    })
    .catch(err => {
      res.json(err);
    });
};
