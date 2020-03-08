const express = require("express");
const router = express.Router();
const adminController = require("../../controller/admin.controller");

router.post("/addFood", adminController.postFood);

module.exports = router;
