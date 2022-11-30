const { PRICE_PER_LOTTO } = require('./constants');

const sortAscending = (randomNums) => {
  randomNums.sort((firstElement, secondElement) => {
    return firstElement - secondElement;
  });
};

const getAmount = (money) => {
  return money / PRICE_PER_LOTTO;
};

module.exports = {
  sortAscending,
  getAmount,
};
