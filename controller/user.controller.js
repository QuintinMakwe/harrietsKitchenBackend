const FoodModel = require("../model/food.models");
const UserModel = require("../model/user.model");

module.exports.getFood = (req, res) => {
  FoodModel.find()
    .then(food => {
      res.send(food);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.postOrder = (req, res) => {
  const foodId = req.params.foodId;
  FoodModel.findById(foodId)
    .then(food => {
      return req.user.addToCart(food);
    })
    .then(res.send("Food Added to Cart"));
};

module.exports.getOrder = (req, res) => {
  const userId = req.params.userId;
  UserModel.findById(userId)
    .populate("cart.items.foodId")
    .exec()
    .then(user => {
      res.send(user);
    });
};

module.exports.postUser = (req, res) => {
  let user = new UserModel({
    name: req.body.name,
    address: req.body.address
  });

  user
    .save()
    .then(res.send("user Created successfully!"))
    .catch(err => {
      console.log(err);
    });
};
