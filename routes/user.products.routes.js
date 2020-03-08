const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.get("/getFood", userController.getFood);

router.post("/cart/:foodId", userController.postOrder);

router.get("/getcart/:userId", userController.getOrder);

module.exports = router;
