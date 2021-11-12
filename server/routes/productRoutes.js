const express = require("express");
// const cors = require("cors");

// var corsOptionsForProduct = {
//   origin: "http://localhost:3000/product",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// var corsOptionsForBanner = {
//   origin: "http://localhost:3000/banner",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

const productController = require("../controller/productController");
const router = express.Router();

router.get(
  "/product",
  // cors(corsOptionsForProduct),
  productController.getProducts
);
router.get(
  "/banner",
  //  cors(corsOptionsForBanner),
  productController.getBanners
);
router.get(
  "/category",
  //  cors(corsOptionsForBanner),
  productController.getCategories
);
router.get(
  "/cart",
  //  cors(corsOptionsForBanner),
  productController.productAddTocart
);

module.exports = router;
