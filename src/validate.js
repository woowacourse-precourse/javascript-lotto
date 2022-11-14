const { LOTTO_PRICE, GAME_INPUT_ERRORS, GAME_RANGE } = require('./config');

const validateLottoBudget = (budget) => {
  const isNumber = !isNaN(budget);
  const isPositive = budget > 0;
  const isMultiple = budget % LOTTO_PRICE === 0;

  if (isNumber === false || isPositive === false || isMultiple === false) {
    throw Error(GAME_INPUT_ERRORS.INVALID_BUDGET_RANGE);
  }
};

const validateTargetNumber = (target) => {
  const isNumber = target.every((num) => !isNaN(num));
  const isInRange = target.every((num) => GAME_RANGE.MIN <= num && num <= GAME_RANGE.MAX);
  const isUnique = new Set(target).size === target.length;
  const isValidLength = target.length === GAME_RANGE.NUM_LENGTH;

  if (isNumber === false || isInRange === false || isUnique === false || isValidLength === false) {
    throw Error(GAME_INPUT_ERRORS.INVALID_INPUT_TYPE);
  }
};

const validateBonusNumber = (bonus) => {
  const isNumber = !isNaN(bonus);
  const isInRange = GAME_RANGE.MIN <= bonus && bonus <= GAME_RANGE.MAX;

  if (isNumber === false || isInRange === false) {
    throw Error(GAME_INPUT_ERRORS.INVALID_INPUT_RANGE);
  }
};

module.exports = { validateLottoBudget, validateTargetNumber, validateBonusNumber };
