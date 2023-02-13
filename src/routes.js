const express = require("express");
const router = express.Router();

const carController = require("./controller/CarController");

router.get("/cars", carController.findAll);
router.get("/car/:carId", carController.findById);
router.post("/cars", carController.saveNewCar);

module.exports = router;
