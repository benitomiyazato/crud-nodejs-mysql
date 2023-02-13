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

  saveNewCar: (model, sign) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO car (model, sign) VALUES (?, ?)",
        [model, sign],
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          resolve({
            car_id: result.insertId,
            model: model,
            sign: sign,
          });
        }
      );
    });
  },
};
