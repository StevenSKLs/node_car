const carRoutes = require("./car.routes");
const userRoutes = require("./user.routes");
const productRoutes = require("./product.routers");

const ApiRoutes = (app) => {
  app.use("/api/v1", carRoutes);
  app.use("/api/v1", userRoutes);
  app.use("/api/v1", productRoutes);
};

module.exports = ApiRoutes;

//postgres://steven:TfaDJVmOUgfDi2G61Buu1Lwnk6GhfQgh@
//dpg-cgsgqgorddl5dqthpmug-a.oregon-postgres.render.com

