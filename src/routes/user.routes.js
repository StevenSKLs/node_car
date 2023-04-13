const { Router } = require("express");
const { createUser, getUsers, putUsers } = require("../controllers/users.controllers");
const {createUserValidator,
    updateUserValidator} = require("../validators/user.validator")

const router = Router();

router.post("/users", createUserValidator, createUser);
router.get("/users", getUsers)
router.put("/users", updateUserValidator, putUsers)

module.exports = router;
