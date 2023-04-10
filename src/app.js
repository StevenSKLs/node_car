const express = require("express");
const ApiRoutes = require("./routes");
const errorHandlerRouter = require("./routes/errorHandler.routes");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

ApiRoutes(app);

app.use((error, req, res, next) => {
  res.status(400).json(error);
});

errorHandlerRouter(app);

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});

//npx sequelize-cli db:migrate
//npx sequelize-cli db:migrate:undo:all
//npx sequelize-cli seed:generate name --cars
// Course.hasOne(models.word, { foreignKey: "student" });
