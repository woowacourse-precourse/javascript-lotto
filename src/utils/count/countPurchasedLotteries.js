const { LOTTERY_INFORMATION } = require('../../constants/constants');

const countPurchasedLotteries = (money) => {
  return Math.floor(Number(money) / LOTTERY_INFORMATION.COST);
};

module.exports = countPurchasedLotteries;
