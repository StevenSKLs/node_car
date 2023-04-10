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
//npx sequelize-cli model:generate --name user --attributes username:string,email:string,password:string,avatar:string
//npx sequelize-cli model:generate --name product --attributes name:string,userId:integer,description:text,price:float,available:boolean,status:string,img:string
//npx sequelize-cli model:generate --name car --attributes userId:integer,totalPrice:float
//npx sequelize-cli model:generate --name productincar --attributes carId:integer,productId:integer,quantity:float,price:float,status:string
//npx sequelize-cli model:generate --name order --attributes userId:integer,totalPrice:float,status:string
//npx sequelize-cli model:generate --name productinorder --attributes orderId:integer,productId:integer,quantity:float,price:float,status:string