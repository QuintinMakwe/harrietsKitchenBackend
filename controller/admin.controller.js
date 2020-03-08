const FoodModel = require("../model/food.models");

module.exports.postFood = (req, res) => {
  console.log(req.body);
  let food = new FoodModel({
    name: req.body.name,
    price: req.body.price,
    image_url: req.body.url
  });

  food
    .save()
    .then(res.send("Food created successfully!"))
    .catch(err => {
      console.log(err);
    });
};
