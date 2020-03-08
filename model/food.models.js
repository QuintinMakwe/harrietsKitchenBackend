const mongoose = require("mongoose");
require("mongoose-type-url");
const Schema = mongoose.Schema;

let FoodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image_url: mongoose.SchemaTypes.Url
});

// userSchema.path("image_url").validate(val => {
//   urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
//   return urlRegex.test(val);
// }, "Invalid URL");

module.exports = mongoose.model("Food", FoodSchema);
