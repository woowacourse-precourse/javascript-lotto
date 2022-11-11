const { NUMBERS } = require("../src/constants");

function getRandomInt() {
  min = Math.ceil(NUMBERS.MIN_LOTTO_NUM);
  max = Math.floor(NUMBERS.MAX_LOTTO_NUM);

  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

module.exports = { getRandomInt };
