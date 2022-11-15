const computeReturnRate = (start, achieved) => {
  let rate = ((achieved / start) * 100).toFixed(1);

  return Number(rate);
};

module.exports = computeReturnRate;
