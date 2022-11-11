const { LOTTERY_INFORMATION } = require('../constants/constants');

const getLottoQuantity = (money) => {
  return Math.floor(Number(money) / LOTTERY_INFORMATION.COST);
};

module.exports = getLottoQuantity;
