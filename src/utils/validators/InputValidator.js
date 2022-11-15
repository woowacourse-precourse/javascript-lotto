const { LOTTO } = require('../../constants');
const { CASHER_ERROR, SELECT_ERROR } = require('../../error/error.constants');
const { isNumber, isInRange } = require('./numbers');

const validateMoney = (userInput) => {
  if (!isNumber(userInput)) throw new Error(CASHER_ERROR.MONEY_IS_NOT_NUMBER);
  if (userInput < LOTTO.TICKET_PRICE) throw new Error(CASHER_ERROR.MONEY_IS_NOT_ENOUGH);
  if (userInput % LOTTO.TICKET_PRICE !== 0) {
    throw new Error(CASHER_ERROR.MONEY_HAS_CHAGE_LEFT);
  }

  return true;
};

const validateWinningNumbers = (winningNumbers) => {
  const numbers = winningNumbers.split(',').map((num) => Number(num));
  if (numbers.length !== LOTTO.NUMBER_COUNT) {
    throw new Error(SELECT_ERROR.WINNING_NUMBERS_LENGTH);
  };
  if (numbers.some((num) => !isNumber(num))) {
    throw new Error(SELECT_ERROR.WINNIG_NUMBERS_IS_NOT_NUMBER);
  }
  if (numbers.some((num) => !isInRange(num))) {
    throw new Error(SELECT_ERROR.WINNING_NUMBERS_IS_NOT_IN_RANGE);
  }

  return true;
};

const validateBonuesNumber = (bonusNumber, winningNumbers) => {
  if (!isNumber(bonusNumber)) {
    throw new Error(SELECT_ERROR.BONUS_NUMBER_IS_NOT_NUMBER);
  }
  if (winningNumbers.includes(Number(bonusNumber))) {
    throw new Error(SELECT_ERROR.BONUS_NUMBER_IS_DUPLICATED);
  }
  if (!isInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, bonusNumber)) {
    throw new Error(SELECT_ERROR.BONUS_NUMBER_IS_NOT_IN_RANGE);
  }
};

module.exports = { validateMoney, validateWinningNumbers, validateBonuesNumber };
