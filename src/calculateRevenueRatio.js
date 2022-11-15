function calculateRevenueRatio(payCount, statisticArray) {
  let revenueRatioResult;
  const revenueArray = [5, 50, 1500, 30000, 2000000];
  let revenue = 0;

  for (let i = 0; i < 5; i++) {
    revenue += revenueArray[i] * statisticArray[i];
  }
  const revenueRatio = Math.round((revenue / payCount) * 1000) / 10.0;

  if (revenueRatio % 1 === 0) {
    revenueRatioResult = `${revenueRatio}.0`;
  } else {
    revenueRatioResult = `${revenueRatio}`
  }

  return revenueRatioResult.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

module.exports = calculateRevenueRatio;