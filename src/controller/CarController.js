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

  saveNewCar: async (req, res) => {
    let model = req.body.model;
    let sign = req.body.sign;

    if (model == null || sign == null) {
      console.log("DEU CAPIM NA PALHETA");
      console.log(`model: ${model}, sign: ${sign}`)
      res.send("Invalid Body");
      return;
    }

    const savedCar = await carService.saveNewCar(model, sign);
    res.json(savedCar);
  },
};
