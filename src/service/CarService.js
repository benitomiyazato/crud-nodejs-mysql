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
};
