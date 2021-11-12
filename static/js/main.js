//for toggling of cart model
function openPage() {
  document.getElementById("product-cart-details").style.display = "block";
}

function closeCart() {
  document.getElementById("product-cart-details").style.display = "none";
}

//optimize steps:

// const requestProduct = axios.get("http://localhost:3000/product");
// const requestBanner = axios.get("http://localhost:3000/banner");

// axios
//   .all([requestProduct, requestBanner])
//   .then(
//     axios.spread((...responses) => {
//       const responseProduct = responses[0];
//       responseProduct && displayProducts(responseProduct.data);
//       const responseBanner = responses[1];
//       responseProduct && displayBanner(responseBanner.data);
//     })
//   )
//   .catch((errors) => {
//     // react on errors.
//     console.log("error", errors);
//   });

//listing of products in cart
const displayCartProduct = (filterCartData) => {
  // console.log("filterCartData", filterCartData);
  const cartContainer = document.getElementById("cart-details-cal");
  document.getElementById("no-product-detail").style.display = "none";
  document.getElementById("content-details-cart").style.display = "flex";
  document.getElementById("procced-details-cart").style.display = "block";
  document.getElementById("procced-details-cart-processed").style.display =
    "none";
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }
  var el = document.getElementById("blank-div-cart");
  setColor(el, "#EEEAEA");

  document.getElementById("cart-details-cal").style.marginTop = "10px";
  document.getElementById("cart-details-cal").style.marginBottom = "10px";

  filterCartData.map((item) => {
    // console.log(item.imageURL);
    const content = `<div class="main-cart-detail">
  <div class="cart-detail">
    <img
    class="cart-detail-img"
    src="${item.imageURL}"
    alt="${item.name}"
    />
  <div class="cart-item-detail">
    <h4>Apple-Washington,Regular,4 pcs</h4>
    <button class="btn--small" onclick="desQty()">-</button>
    <span class="item-detail" id="cart-value-qty">1</span>
    <button class="btn--small" onclick="insQty()">+</button>
    <span class="item-detail">x</span>
    <span id="cart-qty-price">Rs.${item.price}</span>
  </div>
</div>
<div class="cart-price common-padding"><span id="cart-qty-price">Rs.${item.price}</span></div>
</div>
</div>

  `;
    cartContainer.innerHTML += content;
  });
};

// main function for listing product
const productContainer = document.getElementById("main-product-details");
// const bannerContainer = document.getElementById("slideshow-banner");
// console.log("productContainer", productContainer);
const displayProductWithCond = (productDataItems) => {
  // console.log("step 2 ==> ", productDataItems);
  productDataItems &&
    productDataItems.map((item) => {
      // Construct card content
      const content = `<div class="product-detail">
  <h4 class="product-title">${item.name}</h4>
  <div class="product-tablet">
  <div class="product-img-set">
  <img
    class="product-image"
    src="${item.imageURL}"
    alt="${item.name}"
  />

  </div>
<div class="des-tablet">
<div class="product-des">
<p>
${item.description.substr(0, 60) + "..."}
</p>
</div>
  <div class="product-price-section">
    <div class="product-price">
      <p>
    ${item.price}
      </p>
    </div>
    <button class="btn" onClick="getProduct('${item.id}')")>Buy Now</button>
  </div>
  </div>
  </div>
  <div class="dotted-line"></div>
  </div>`;
      productContainer.innerHTML += content;
    });
};

//listing of products by condition:filter, display all and add to cart.
const displayProducts = (dataItems, filterItem, cartItem) => {
  if (filterItem !== 0) {
    //for filter
    const filterData = dataItems.filter((item) => item.category == filterItem);
    // console.log(filterData);
    // need to recheck for some conditions
    displayProductWithCond(filterData);
  } else if (cartItem !== 0) {
    // for cart
    const filterCartData = dataItems.filter((item) => item.id == cartItem);
    // console.log(filterCartData);
    displayCartProduct(filterCartData);
  } else {
    // lisiting of all product
    displayProductWithCond(dataItems);
  }
};

//static cart value update fun
let count = 1;
const getProduct = (cartItem) => {
  document.getElementById("cart-value-update").innerHTML = `${count++} items`;
  //cart-records
  fetchRecords("product", (filterItem = 0), cartItem);
};

const fetchRecords = (urlData, filterItem = 0, cartItem = 0) => {
  // console.log("filterItem", filterItem, "cartItem", cartItem);
  axios
    .get(`http://localhost:3000/${urlData}`)
    .then((response) => {
      const items = response.data;
      displayProducts(items, filterItem, cartItem);
    })
    .catch((error) => console.error(error));
};

fetchRecords("product");

//lisiting of category
const CategoryContainer = document.getElementById("category-items");
const displayCategory = (dataItems) => {
  // console.log("category data", dataItems);
  dataItems.map((item) => {
    const content = `<li class="products-lists" >${item.name}</li>`;
    CategoryContainer.innerHTML += content;
  });
};

//catgry active (need updation)
var selector = ".category-items li";
$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});
const fetchcategories = (urlData) => {
  axios
    .get(`http://localhost:3000/${urlData}`)
    .then((response) => {
      const items = response.data;
      displayCategory(items);
    })
    .catch((error) => console.error(error));
};

fetchcategories("category");

const getCategory = (filterItem) => {
  // console.log("hye", filterItem);
  fetchRecords("product", filterItem);

  //local storage for filteration
};

//static card func
let cartQty = 1;
document.getElementById("cart-value-qty").innerHTML = cartQty;

const insQty = () => {
  document.getElementById("cart-value-qty").innerHTML = ++cartQty;
};
const desQty = () => {
  document.getElementById("cart-value-qty").innerHTML = --cartQty;
};

// let totalQtyPrice = document.getElementById("cart-qty-price").value;
let totalQtyPrice = 187;
let cartValueQty = document.getElementById("cart-value-qty");
// console.log("val", totalQtyPrice, cartValueQty);
// console.log("val", cartValueQty);
