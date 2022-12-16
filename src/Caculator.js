const { PRIZE_MONEY, UNIT } = require("./constant/constant");

const Caculator = {
  caculateLottoAmount(money) {
    return money / UNIT.money;
  },

  caculateTotalPrize(result) {
    return Object.entries(result).reduce(
      (total, [match, number]) => (total += PRIZE_MONEY[match] * number || 0),
      0
    );
  },

  caculateProfitRatio(money, totalPrize) {
    return ((totalPrize / money) * 100).toFixed(1);
  },
};

module.exports = Caculator;
