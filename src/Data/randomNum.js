function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
module.exports = randomNumber;
