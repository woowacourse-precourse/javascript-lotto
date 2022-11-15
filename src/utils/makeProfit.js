const makeProfit = (hitResult, lottos) => {
  const sum =
    hitResult[0] * 5000 +
    hitResult[1] * 50000 +
    hitResult[2] * 1500000 +
    hitResult[3] * 30000000 +
    hitResult[4] * 2000000000;

  const profit = ((sum / (lottos.length * 1000)) * 100).toFixed(2);

  return { profit };
};

module.exports = makeProfit;
