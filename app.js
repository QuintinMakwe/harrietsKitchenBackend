const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/harrietKitchen";
const userRoutes = require("./routes/user.products.routes");
const adminRoutes = require("./routes/admin/admin.products.routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Harriets kitchen");
});

app.listen(3000, () => {
  console.log("Connected out successfully....");
});
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () => {
  console.log("DB connected out successfully...");
});
db.on("error", err => {
  console.log("conection error: ", err);
});
