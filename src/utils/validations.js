const {
  INPUT_MONEY_ERROR,
  GENERATE_LOTTO_ERROR,
} = require('../constants/constants');

const validateInputMoney = (money) => {
  const NUM = /^[0-9]+$/;
  if (!money) {
    throw new Error(INPUT_MONEY_ERROR.NOT_NULL_ALLOWED);
  }
  if (!NUM.test(money)) {
    throw new Error(INPUT_MONEY_ERROR.ONLY_NUM_ALLOWED);
  }
  // if (money < 0) {
  //   throw new Error(INPUT_MONEY_ERROR.NUM_OVER_ZERO_ALLOWED);
  // }

  if (money % 1000 !== 0) {
    throw new Error(INPUT_MONEY_ERROR.THOUSAND_UNIT_ALLOWED);
  }
};

const validateLotto = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(GENERATE_LOTTO_ERROR.SIX_DIGIT_ALLOWED);
  }
  if (new Set(numbers).size !== numbers.length) {
    throw new Error(GENERATE_LOTTO_ERROR.NOT_DUPLICATED_ALLOWED);
  }
  if (!numbers.filter((num) => 1 > num || num > 45)) {
    throw new Error(GENERATE_LOTTO_ERROR.NUM_IN_RANGE_ALLOWED);
  }
};

module.exports = { validateInputMoney, validateLotto };
