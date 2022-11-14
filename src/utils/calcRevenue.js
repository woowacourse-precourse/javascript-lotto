const calcRevenue = (input, money) => {
  return ((input / money) * 100).toFixed(1);
};

module.exports = calcRevenue;
