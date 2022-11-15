const calcRevenueRate = (revenue, money) => {
  return ((revenue / money) * 100).toFixed(1);
};

module.exports = calcRevenueRate;
