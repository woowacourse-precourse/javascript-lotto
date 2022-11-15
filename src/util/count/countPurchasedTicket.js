const { LOTTERY_NUM } = require('../../constant/constant');

const countPurchasedTicket = (money) => {
  return Math.floor(Number(money) / LOTTERY_NUM.COST);
};

module.exports = countPurchasedTicket;
