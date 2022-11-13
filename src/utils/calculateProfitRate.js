function calculateProfitRate(totalPrizeMoney, totalPurchaseAmount) {
  const profitRate = (totalPrizeMoney / totalPurchaseAmount) * 100;
  return profitRate.toFixed(1);
}

module.exports = calculateProfitRate;
