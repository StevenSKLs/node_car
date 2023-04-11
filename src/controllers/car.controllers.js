const { car } = require("../src/models");

const createCar = async (req, res, next) => {
  try {
    const carInfo = req.body;
    // {tableId, userId}
    await orders.create(carInfo);
    res.status(201).send();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// const addProductToOrder = async (req, res, next) => {
//   try {
//     // ? info necesaria
//     // * orderId, productId, quantity, precio
//     // agrego un producto
//     // cantidad y trae un precio unitario
//     // precio unitario * cantidad
//     // sumo al total de la orden
//     const { orderId, productId, quantity, price } = req.body;
//     await order_details.create({ orderId, productId, quantity, price });
//     const total = price * quantity;
//     await orders.increment({ total }, { where: { id: orderId } });
//     res.json({
//       message: "Producto agregado satisfactoriamente",
//     });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

module.exports = {
  createCar
};
