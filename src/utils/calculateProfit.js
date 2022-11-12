const { LOTTERY_PRIZE } = require('../constants/constants');

const calculateProfit = (userResult) => {
  let earnedMoney = 0;

  for (let rank = 1; rank <= 5; rank += 1) {
    const rankCount = userResult[rank];
    earnedMoney += LOTTERY_PRIZE[rank] * rankCount;
  }
  return earnedMoney;
};

module.exports = calculateProfit;
