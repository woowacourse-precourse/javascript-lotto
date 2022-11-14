const { VALUE } = require('../constants');

const checkMoneyIsNan = (money) => {
  const numberMoney = Number(money);
  if (isNaN(numberMoney)) {
    return true;
  }
  return false;
};

const checkMoneyDivision = (money) => {
  const numberMoney = Number(money);
  if (numberMoney % VALUE.LOTTO_PRICE !== 0) {
    return true;
  }
  return false;
};

const checkMoneyLessStandard = (money) => {
  const numberMoney = Number(money);
  if (numberMoney < VALUE.LOTTO_PRICE) {
    return true;
  }
  return false;
};

module.exports = {
  checkMoneyIsNan,
  checkMoneyDivision,
  checkMoneyLessStandard,
};
