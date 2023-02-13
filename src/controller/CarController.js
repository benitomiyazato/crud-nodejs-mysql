const carService = require("../service/CarService");

module.exports = {
  findAll: async (req, res) => {
    let cars = await carService.findAll();
    res.json(cars);
  },
  
  findById: async (req, res) => {
    let carId = req.params.carId;
    let car = await carService.findById(carId);
    res.json(car);
  },
};
