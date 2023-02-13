const carService = require("../service/CarService");

module.exports = {
  findAll: async (req, res) => {
    let cars = await carService.findAll();
    res.json(cars);
  },

  findById: async (req, res) => {
    const carId = req.params.carId;
    let car = await carService.findById(carId);
    res.json(car);
  },

  saveNewCar: async (req, res) => {
    const model = req.body.model;
    const sign = req.body.sign;

    if (model == null || sign == null) {
      console.log("DEU CAPIM NA PALHETA");
      console.log(`model: ${model}, sign: ${sign}`);
      res.statusCode = 400;
      res.send("Invalid Body");
      return;
    }

    const savedCar = await carService.saveNewCar(model, sign);
    res.json(savedCar);
  },

  editCar: async (req, res) => {
    const carId = req.params.carId;
    const model = req.body.model;
    const sign = req.body.sign;

    if (carId == null || carId == "") {
      res.statusCode = 400;
      res.send("Invalid Id");
      return;
    }

    const editedCar = await carService.editCar(carId, model, sign);
    res.json(editedCar);
  },
};
