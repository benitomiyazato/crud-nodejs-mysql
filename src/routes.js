const express = require("express");
const router = express.Router();

const carController = require("./controller/CarController");

router.get("/cars", carController.findAll);
router.get("/car/:carId", carController.findById);
router.post("/cars", carController.saveNewCar);
router.put("/car/:carId", carController.editCar);
router.delete("/car/:carId", carController.deleteCar);

module.exports = router;
