const { LOTTERY_PRICE } = require('../../constants/constants');

const verifyStartMoney = (money) => {
  return money % LOTTERY_PRICE === 0 ? true : false;
};

module.exports = verifyStartMoney;
