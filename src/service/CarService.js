const db = require("../db");

module.exports = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM car", (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      });
    });
  },

  findById: (carId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM car WHERE car_id = ${carId}`, (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      });
    });
  },
};
