const { LOTTERY_MONEY } = require('../../constant/constant');

const examineAmount = (money) => {
  return money % LOTTERY_MONEY === 0 ? true : false;
};

module.exports = examineAmount;
