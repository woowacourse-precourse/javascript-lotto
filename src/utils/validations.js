const {
  INPUT_ERROR,
  LOTTO_ERROR,
  NUM_REGIX,
} = require('../constants/constants');

const validateInputMoney = (money) => {
  if (!money) {
    throw new Error(INPUT_ERROR.INVALID_NULL);
  }
  if (!NUM_REGIX.test(money)) {
    throw new Error(INPUT_ERROR.INVALID_NUM);
  }
  if (money % 1000 !== 0) {
    throw new Error(INPUT_ERROR.INVALID_UNIT);
  }
};

const validateLotto = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(LOTTO_ERROR.INVALID_DIGIT);
  }
  if (new Set(numbers).size !== numbers.length) {
    throw new Error(LOTTO_ERROR.INVALID_DUPLICATE);
  }
  if (
    numbers.every((num) => {
      !NUM_REGIX.test(num);
    })
  ) {
    throw new Error(LOTTO_ERROR.INVALID_NUM);
  }
  if (!numbers.filter((num) => 1 > num || num > 45)) {
    throw new Error(LOTTO_ERROR.INVALID_RANGE);
  }
};

const validateBonus = (bonusNum, winningLotto) => {
  bonusNum = parseInt(bonusNum);
  if (bonusNum.length === 0) {
    throw new Error(LOTTO_ERROR.INVALID_DIGIT);
  }
  if (winningLotto.includes(bonusNum)) {
    throw new Error(LOTTO_ERROR.INVALID_DUPLICATE);
  }
  if (!NUM_REGIX.test(bonusNum)) {
    throw new Error(LOTTO_ERROR.INVALID_NUM);
  }
  if (!1 > bonusNum || bonusNum > 45) {
    throw new Error(LOTTO_ERROR.INVALID_RANGE);
  }
};

module.exports = { validateInputMoney, validateLotto, validateBonus };
