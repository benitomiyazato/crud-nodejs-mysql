const db = require("../db");

function findById(carId) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM car WHERE car_id = ${carId}`, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
}

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
    return findById(carId);
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

  editCar: (carId, model, sign) => {
    findById(carId).then((carToEdit) => {
      console.log("Car to edit: ", carToEdit);
      return new Promise((resolve, reject) => {
        if (model == null || model == "") {
          model = carToEdit[0].model;
        }

        if (sign === null || sign === "") {
          sign = carToEdit[0].sign;
        }

        db.query(
          "UPDATE car SET model = ?, sign = ? WHERE car_id = ?",
          [model, sign, carId],
          (error, results) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(results);
          }
        );
      });
    });
  },

  deleteCar: (carId) => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM car WHERE car_id = ?", carId, (error, results) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(results);
      });
    });
  },
};
