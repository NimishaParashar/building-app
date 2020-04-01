const express = require("express");
const router = express.Router();
const multer = require("multer");
const tenantsController = require("../app/controllers/tenantsControllers");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    //  cb(null, new Date().toISOString() + file.originalname);
    cb(null, file.fieldname + "-" + Date.now());
  }
});

const upload = multer({ storage: storage });

//const upload = multer({ dest: "uploads/" });

const roomsController = require("../app/controllers/roomsControllers");
const buildingsController = require("../app/controllers/buildingsController");
const amenitiesController = require("../app/controllers/amenitiesController");
router.get("/buildings", buildingsController.list);
router.post("/buildings", buildingsController.create);
router.get("/buildings/:id", buildingsController.show);
router.delete("/buildings/:id", buildingsController.destroy);
router.put("/buildings/:id", buildingsController.update);

router.get("/amenities", amenitiesController.list);
router.post("/amenities", amenitiesController.create);
router.put("/amenities/:id", amenitiesController.update);
router.get("/amenities/:id", amenitiesController.show);
router.delete("/amenities/:id", amenitiesController.destroy);

router.get("/rooms", roomsController.list);
router.post("/rooms", upload.single("profile"), roomsController.create);

router.post("/tenants", tenantsController.show);
module.exports = router;
