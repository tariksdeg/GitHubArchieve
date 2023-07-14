const mongoose = require("mongoose");
const winston = require('winston')
const express = require("express");
const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || 3001;
const url = "mongodb://localhost:27017/vidly";

mongoose.set("strictQuery", false);

app.listen(port, () => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB/vidly"))
    .catch((err) => console.error("Could not connected to MongoDB..."));
  console.log(`listening ${port}...`);
  winston.info(`listening ${port}...`);
});
 