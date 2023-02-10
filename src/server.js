require("dotenv").config({ path: "variables.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
