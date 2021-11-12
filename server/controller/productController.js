const productData = require("../products/index.get.json");
const bannerData = require("../banners/index.get.json");
const categoryData = require("../categories/index.get.json");
const cartData = require("../addToCart/index.post.json");

exports.getProducts = (req, res, next) => {
  res.json(productData);
};
exports.getBanners = (req, res, next) => {
  res.json(bannerData);
};
exports.getCategories = (req, res, next) => {
  res.json(categoryData);
};
exports.productAddTocart = (req, res, next) => {
  res.json(cartData);
};
