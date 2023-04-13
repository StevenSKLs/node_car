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
  param("id").isInt().withMessage("The id must be an integer"),
  check("username", "Error with username field")
    .exists()
    .withMessage("The property 'username' must exist")
    .notEmpty()
    .withMessage("The username must not be empty")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3, max: 30 })
    .withMessage("Username must be between 3 and 30 characters"),
  check("avatar", "Error with avatar field")
    .exists()
    .withMessage("The 'avatar' property must exist")
    .notEmpty()
    .withMessage("The avatar must not be empty")
    .isURL()
    .withMessage("Avatar must be a valid Url"),
    check("password", "Error password, require min 7")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 7 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];


module.exports = {
  createUserValidator,
  updateUserValidator,
};