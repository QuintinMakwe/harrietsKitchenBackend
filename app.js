const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/harrietKitchen";
const userRoutes = require("./routes/user.products.routes");
const adminRoutes = require("./routes/admin/admin.products.routes");
const userModel = require("./model/user.model");

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use((req, res, next) => {
  userModel
    .findById("5e653483da5ab92660e412dc")
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log("An error occured", err));
});
app.get("/", (req, res) => {
  res.send("Welcome to Harriets kitchen");
});
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

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
