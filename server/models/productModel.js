// const fs = require("fs");
// const path = require("path");

// const p = path.join(path.dirname(__dirname), "data", "product.json");

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       console.log(err);
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Tutorial {
//   // Model contain 4 property’s { id, title, description, published }
//   constructor(id, title, description, published) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.published = published;
//   }

//   save() {
//     getProductsFromFile((Products) => {
//       if (this.id) {
//         const existingTutorialIndex = Products.findIndex(
//           (prod) => prod.id === this.id
//         );
//         const updatedProducts = [...Products];
//         updatedProducts[existingTutorialIndex] = this;
//         fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//           console.log(err);
//         });
//       } else {
//         this.id = new Date().getTime().toString();
//         Products.push(this);
//         fs.writeFile(p, JSON.stringify(Products), (err) => {
//           console.log(err);
//         });
//       }
//     });
//   }

//   static deleteById(id) {
//     getProductsFromFile((Products) => {
//       const updatedProducts = Products.filter((prod) => prod.id !== id);
//       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {});
//     });
//   }

//   static fetchAll(cb) {
//     getProductsFromFile(cb);
//   }

//   static findById(id, cb) {
//     getProductsFromFile((Products) => {
//       const Tutorial = Products.find((p) => p.id === id);
//       cb(Tutorial);
//     });
//   }
// };
