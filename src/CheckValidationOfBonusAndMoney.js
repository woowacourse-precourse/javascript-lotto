const { ERROR } = require("./data/Constants");

const validateMoney = (money) => {
  if (money % 1000 !== 0) {
    throw new Error(ERROR.ERROR_MONEY_UNIT);
  }
  if (money <= 0) {
    throw new Error(ERROR.ERROR_MONEY_MINIMUM);
  }
};

const validateBonusNum = (bonusNum, winningNum) => {
  if (bonusNum > 45 || bonusNum < 1) {
    throw new Error(ERROR.ERROR_BONUS_RANGE);
  }
  if (/^[0-9]*$/g.test(bonusNum) === false) {
    throw new Error(ERROR.ERROR_BONUS_NUMBER);
  }
  if (winningNum.includes(bonusNum) === true) {
    throw new Error(ERROR.ERROR_BONUS_DUPLICATION);
  }
};
module.exports = { validateBonusNum, validateMoney };
