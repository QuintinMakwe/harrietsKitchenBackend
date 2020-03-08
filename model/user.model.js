const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cart: {
    items: [
      {
        foodId: {
          type: Schema.Types.ObjectId,
          ref: "Food",
          required: true
        },
        quantity: { type: Number, required: true }
      }
    ]
  }
});

UserSchema.methods.addToCart = function(food) {
  const cartFoodIndex = this.cart.items.findIndex(cf => {
    return cf.foodId.toString() == food._id.toString();
  });
  let newQuantity = 1;
  let updatedCartItem = [...this.cart.items];
  if (cartFoodIndex >= 0) {
    newQuantity = this.cart.items[cartFoodIndex].quantity + 1;
    updatedCartItem[cartFoodIndex].quantity = newQuantity;
  } else {
    updatedCartItem.push({
      foodId: food._id,
      quantity: newQuantity
    });
  }

  const updatedCart = {
    items: updatedCartItem
  };

  this.cart = updatedCart;
  return this.save();
};

module.exports = mongoose.model("User", UserSchema);
