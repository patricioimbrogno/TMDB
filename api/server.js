const express = require("express");
const app = express();
const db = require("./models/db");
const models = require("./models");
const routes = require("./routes");
const volleyball = require('volleyball')
const cookieParser = require("cookie-parser");
const envs = require("./config/envs");

// logging middleware
app.use(volleyball);

// parsing middleware 
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

db.sync({ force: false })
  .then(function () {
    app.listen(envs.PORT, () =>
      console.log(`Servidor escuchando en el puerto ${envs.PORT}`)
    );
  })
  .catch(console.error);
