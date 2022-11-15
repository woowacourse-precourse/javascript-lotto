const { LOTTERY_PRICE } = require('../../constants/constants');

const verifyStartMoneyUnit = (money) => {
  return money % LOTTERY_PRICE === 0 ? true : false;
};

module.exports = verifyStartMoneyUnit;
