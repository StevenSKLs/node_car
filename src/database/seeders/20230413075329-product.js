'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product",
      [
        {
          name: "El Huawei P9",
          userId: 1,
          description: "Los megapíxeles de las cámaras, si bien siguen siendo la unidad de medida para saber qué tan buena es una cámara, han pasado a un segundo plano tanto en los teléfonos móviles como en las cámaras fotográficas digitales.",
          price: 90.5,
          img: "https://www.enter.co/wp-content/uploads/2016/07/Huawei-P9-sec-768x452.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "ZTE Axon 7",userId: 1,
          description: "En los grandes aparatos es común encontrar parlantes estéreo en lugar de un solo altavoz, como sucede en la gran mayoría. ",
          price: 99.25,
          img: "https://www.enter.co/wp-content/uploads/2016/05/zte_axon_1024-768x576.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "iPhone 7",userId: 1,
          description: "Al ser equipos expuestos todo el día a posibles caídas o a ambientes que los pueden afectar, hay que valorar el esfuerzo de los fabricantes por agregarles a los teléfonos inteligentes de alta gama una capa de protección que los mantiene a salvo del agua y el polvo. ",
          price: 44.75,
          img: "https://www.enter.co/wp-content/uploads/2016/09/iphone-7-imagenes-carrusel-768x452.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "iPhone 14 Pro",userId: 1,
          description: "Este teléfono salió al mercado a principios de septiembre del año pasado, revolucionando, junto que su hermano mayo, la industria de celulares, con la Dynamic Island. ",
          price: 59.0,
          img: "https://www.enter.co/wp-content/uploads/2022/02/iPhone-14-Pro-verde-portada-768x403.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
        {
          name: "Samsung Galaxy S23 Ultra",userId: 1,
          description: "El último celular de Samsung no podía faltar en la lista. El Samsung S23 Ultra llegó a Colombia el 1 de febrero con un procesador Snapdragon 8 Gen 2.",
          price: 123.5,
          img: "https://www.enter.co/wp-content/uploads/2022/11/GALAXY-S23-ULTRA-5K2-scaled-1-768x461.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now()),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product", null, {});
  }
};
