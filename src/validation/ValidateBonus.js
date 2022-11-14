const { MAX_NUMBER, MIN_NUMBER, ERROR_MSG } = require("../constants");

const ValidateBonus = (numbers, bonusNumber) => {
  checkBonusNotANumber(bonusNumber);
  checkBonusDuplicated(numbers, bonusNumber);
  checkBonusRange(bonusNumber);
};

const checkBonusNotANumber = (bonusNumber) => {
  if (isNaN(bonusNumber)) {
    throw new Error(ERROR_MSG.BONUS_NOT_A_NUMBER);
  }
};

const checkBonusDuplicated = (numbers, bonusNumber) => {
  if (numbers.includes(+bonusNumber)) {
    throw new Error(ERROR_MSG.BONUS_DUPLICATED);
  }
};

const checkBonusRange = (bonusNumber) => {
  if (+bonusNumber < MIN_NUMBER || +bonusNumber > MAX_NUMBER) {
    throw new Error(ERROR_MSG.OUT_OF_RANGE);
  }
};

module.exports = ValidateBonus;
