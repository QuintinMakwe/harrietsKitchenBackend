const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.get("/getFood", userController.getFood);

module.exports = router;
