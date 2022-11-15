const sortAscendingNumbers = (numbers) => {
  return numbers.sort((a, b) => a - b);
};

const getNumberIntersection = (arr1, arr2) => {
  return arr1.filter((x) => arr2.includes(x));
};

const addMoneyComma = (money) => {
  return money.toLocaleString();
};

const getProfitRate = (purchaseAmout, totalRevenue) => {
  return 100 + ((totalRevenue - purchaseAmout) / purchaseAmout) * 100;
};

const roundingNumber = (number) => {
  return Math.round(number * 10) / 10;
};

module.exports = {
  sortAscendingNumbers,
  getNumberIntersection,
  addMoneyComma,
  getProfitRate,
  roundingNumber,
};
