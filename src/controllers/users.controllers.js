const UserServices = require("../services/users.services");
const { user } = require("../models");

const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    await UserServices.add(userData);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const get_User = await user.findAll({
      attributes: ["id", "username", "email", "password","avatar"],
    })
    res.json(get_User)
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createUser,
  getUsers
};
