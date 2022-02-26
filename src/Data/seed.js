const CSS_COLOR_NAMES = require('./css-colors');
const fs = require('fs');
const uniqid = require('uniqid');
const randomNum = require('./randomNum');

const randPrice = Math.round(randomNum(5, 100) * 100) / 100;

let products = CSS_COLOR_NAMES.map((product) => {
  return {
    id: uniqid(),
    name: product,
    price: randPrice,
    color: product,
  };
});

products = JSON.stringify(products);

fs.writeFile('./data.js', products, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('success');
});
