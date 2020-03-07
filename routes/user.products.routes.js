const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("dummy data for application to remain intact");
});

module.exports = router;
