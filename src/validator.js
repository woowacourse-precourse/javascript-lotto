const {
  ERROR_MESSAGE_BONUS_NUMBER,
  ERROR_MESSAGE_PURCHASE_AMOUNT,
} = require("./constant");

const validateInputMoney = (money) => {
  if (isNaN(money)) {
    throw new Error(ERROR_MESSAGE_PURCHASE_AMOUNT.TYPE);
  }
  if (money % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE_PURCHASE_AMOUNT.UNIT);
  }
  if (money <= 0) {
    throw new Error(ERROR_MESSAGE_PURCHASE_AMOUNT.RANGE);
  }
  return money;
};

const validateInputBonusNum = (winningNumbers, bonusNum) => {
  if (isNaN(bonusNum)) throw new Error(ERROR_MESSAGE_BONUS_NUMBER.TYPE);
  if (bonusNum < 1 || bonusNum > 45)
    throw new Error(ERROR_MESSAGE_BONUS_NUMBER.RANGE);
  if (winningNumbers.includes(bonusNum))
    throw new Error(ERROR_MESSAGE_BONUS_NUMBER.DUPLICATION);
};

module.exports = { validateInputMoney, validateInputBonusNum };
