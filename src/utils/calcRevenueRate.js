const calcRevenueRate = (input, money) => {
  return ((input / money) * 100).toFixed(1);
};

module.exports = calcRevenueRate;
