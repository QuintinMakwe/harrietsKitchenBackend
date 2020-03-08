const FoodModel = require("../model/food.models");

module.exports.getFood = (req, res) => {
  FoodModel.find()
    .then(food => {
      res.send(food);
    })
    .catch(err => {
      console.log(err);
    });
};
