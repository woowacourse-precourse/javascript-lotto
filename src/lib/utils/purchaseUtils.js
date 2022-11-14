const { VALUE } = require('../constants');

const checkMoneyIsNan = (money) => {
  if (isNaN(money)) return true;
  return false;
};

const checkMoneyDivision = (money) => {
  if (money % VALUE.LOTTO_PRICE !== 0) return true;
  return false;
};

const checkMoneyLessStandard = (money) => {
  if (money < VALUE.LOTTO_PRICE) return true;
  return false;
};

module.exports = {
  checkMoneyIsNan,
  checkMoneyDivision,
  checkMoneyLessStandard,
};
