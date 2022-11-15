const { REWARDS } = require("../constants/constants");
const calcRevenue = (resultArr) => {
  let revenue = 0;
  for (let i = 0; i < 6; i++) {
    revenue += REWARDS[i] * resultArr[i];
  }
  return revenue;
};

module.exports = calcRevenue;
