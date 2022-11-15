const {
  INPUT_ERROR,
  LOTTO_ERROR,
  BONUS_NUM_ERROR,
} = require('../constants/constants');

const validateInputMoney = (money) => {
  const NUM = /^[0-9]+$/;
  if (!money) {
    throw new Error(INPUT_ERROR.INVALID_NULL);
  }
  if (!NUM.test(money)) {
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
  if (!numbers.filter((num) => 1 > num || num > 45)) {
    throw new Error(LOTTO_ERROR.INVALID_RANGE);
  }
};

const validateBonus = (bonusNum, winningLotto) => {
  bonusNum = parseInt(bonusNum);
  if (bonusNum.length === 0) {
    throw new Error(BONUS_NUM_ERROR.ONE_DIGIT_ALLOWED);
  }
  if (winningLotto.includes(bonusNum)) {
    throw new Error(BONUS_NUM_ERROR.NOT_DUPLICATED_ALLOWED);
  }
  if (!1 > bonusNum || bonusNum > 45) {
    throw new Error(BONUS_NUM_ERROR.NUM_IN_RANGE_ALLOWED);
  }
};

module.exports = { validateInputMoney, validateLotto, validateBonus };
