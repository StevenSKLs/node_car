const { Router } = require("express");
const { createUser, getUsers } = require("../controllers/users.controllers");

const router = Router();

router.post("/users", createUser);
router.get("/users", getUsers)

module.exports = router;
