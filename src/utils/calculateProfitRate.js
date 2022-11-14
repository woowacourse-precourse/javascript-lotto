const { DECIMAL_PLACE_OF_PROFIT_RATE } = require('../constants/gameSetting');

function calculateProfitRate(totalPrizeMoney, totalPurchaseAmount) {
  const profitRate = (totalPrizeMoney / totalPurchaseAmount) * 100;
  return profitRate.toFixed(DECIMAL_PLACE_OF_PROFIT_RATE);
}

module.exports = calculateProfitRate;
