const express = require("express");
const router = express.Router();

const carController = require("./controller/CarController");

router.get("/cars", carController.findAll);

module.exports = router;
