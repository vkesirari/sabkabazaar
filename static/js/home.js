// var dotContainer = document.getElementById("dot-container");
// var newSpan = document.createElement("span");
// newSpan.setAttribute("class", "dot");
// // // newSpan.onclick = function () {
// // //   currentSlide(1);
// // // };=
// dotContainer.appendChild(newSpan);

// document
//   .getElementById("dot-container")
//   .addEventListener("click", doSomething(5), false);

// function doSomething(n) {
//   alert(n);
// }

//need to recheck for carousel fun
// const fetchRecords = (urlData) => {
//   axios
//     .get(`http://localhost:3000/${urlData}`)
//     .then((response) => {
//       const items = response.data;
//       displayBanner(items);
//     })
//     .catch((error) => console.error(error));
// };

// fetchRecords("banner");
// const bannerContainer = document.getElementById("slideshow-banner");
// console.log("bannerContainer", bannerContainer);

// const displayBanner = (dataItems) => {
//   console.log("banner data", dataItems);
//   dataItems.map((item) => {
//     const content = `<div class="mySlides fade">
//     <img class="slider-img" src="/static/images/offers/offer2.jpg" />
//   </div>`;
//     bannerContainer.innerHTML += content;
//   });
// };

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//display products under banner fun
const bannerContainer = document.getElementById("category-container");
// console.log("bannerContainer", bannerContainer);

const displayCategory = (dataItems) => {
  // console.log("banner data", dataItems);
  dataItems.map((item) => {
    const content = `<div class="img-photo-container">
    <div class="home-img">
      <img src="${item.imageUrl}" alt="${item.name}" />
    </div>
    <div class="img-container-details">
      <h3>${item.name}</h3>
      <p class="para-des">${item.description}</p>
      <button class="btn" >Explore ${item.key}</button>
    </div>
  </div>`;
    bannerContainer.innerHTML += content;
  });
};

const fetchRecords = (urlData) => {
  axios
    .get(`http://localhost:3000/${urlData}`)
    .then((response) => {
      const items = response.data;
      displayCategory(items);
    })
    .catch((error) => console.error(error));
};

fetchRecords("category");
