const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
  check("username", "Error with field username")
    .exists()
    .withMessage("The property 'username' must exist")
    .notEmpty()
    .withMessage("Username must not be empty")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3, max: 30 })
    .withMessage("Username must be between 3 and 30 characters"),
  check("email", "Error with email")
    .exists()
    .withMessage("The email property was not found")
    .notEmpty()
    .withMessage("No value found for property 'email'")
    .isString()
    .withMessage("The email property must be a string")
    .isLength({ min: 7, max: 50 })
    .withMessage("The email must have a length between 7 and 50 characters")
    .isEmail()
    .withMessage("The mail is not in a correct format"),
  check("password", "Password error")
    .exists()
    .withMessage("No property password found")
    .notEmpty()
    .withMessage("No property password value found")
    .isString()
    .withMessage("The property password must be a string")
    .isLength({ min: 4 })
    .withMessage("Password must be at least 4 characters long"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const updateUserValidator = [
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  check("username", "Error con el campo username")
    .exists()
    .withMessage("Debe existir la propiedad 'username'")
    .notEmpty()
    .withMessage("El username no debe estar vacio")
    .isString()
    .withMessage("El username debe ser un string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El username debe tener entre 6 y 30 caracteres"),
  check("avatar", "Error con el campo avatar")
    .exists()
    .withMessage("Debe existir la propiedad 'avatar'")
    .notEmpty()
    .withMessage("El avatar no debe estar vacio")
    .isURL()
    .withMessage("el avatar debe ser una URL valida"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];


module.exports = {
  createUserValidator,
  updateUserValidator,
};