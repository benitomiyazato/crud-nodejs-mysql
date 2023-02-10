const carService = require("../service/CarService");

module.exports = {
  findAll: async (req, res) => {
    let cars = await carService.findAll();
    res.json(cars);
  },
};
