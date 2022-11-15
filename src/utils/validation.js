const { Console } = require('@woowacourse/mission-utils');
const { RULES, ERROR_MESSAGE } = require('../constants/index.js');

const isValidateNumber = (number) => {
  const numberRegex = /^[0-9]+$/g;
  if (!number.match(numberRegex)) {
    Console.close();
    throw new Error(ERROR_MESSAGE.NON_NUMERIC_VALUE);
  }
};

const isAmountUnitOfLottoPrice = (number) => {
  if (number % RULES.LOTTO_PRICE !== 0) {
    Console.close();
    throw new Error(ERROR_MESSAGE.INVALID_PRICE_UNIT);
  }
};

const isZeroNumber = (number) => {
  if (number === '0') {
    Console.close();
    throw new Error(ERROR_MESSAGE.ZERO_NUMBER);
  }
};

const isLottoRange = (number) => {
  if (number < RULES.MIN_LOTTO_NUMBER || number > RULES.MAX_LOTTO_NUMBER) {
    Console.close();
    throw new Error(ERROR_MESSAGE.INVALID_NUMERIC_RANGE);
  }
};

const isDuplicate = (number) => {
  if (new Set(number).size !== RULES.LOTTO_NUMS) {
    Console.close();
    throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
  }
};

module.exports = { isValidateNumber, isAmountUnitOfLottoPrice, isZeroNumber, isLottoRange, isDuplicate };
