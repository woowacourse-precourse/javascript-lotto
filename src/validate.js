const { LOTTO_PRICE, GAME_INPUT_ERRORS, GAME_RANGE } = require('./config');

function _isNumber(...args) {
  return args.every((arg) => !isNaN(arg));
}

function _isInRange(...args) {
  return args.every((arg) => GAME_RANGE.MIN <= arg && arg <= GAME_RANGE.MAX);
}

const validateLottoBudget = (budget) => {
  const isNumber = _isNumber(budget);
  const isPositive = budget > 0;
  const isMultiple = budget % LOTTO_PRICE === 0;

  if (isNumber === false) throw Error(GAME_INPUT_ERRORS.INVALID_INPUT_TYPE);
  if (isPositive === false) throw Error(GAME_INPUT_ERRORS.INVALID_BUDGET_RANGE);
  if (isMultiple === false) throw Error(GAME_INPUT_ERRORS.INVALID_BUDGET_REMAINDER);
};

const validateTargetNumber = (target) => {
  const isNumber = _isNumber(...target);
  const isInRange = _isInRange(...target);
  const isUnique = new Set(target).size === target.length;
  const isValidLength = target.length === GAME_RANGE.NUM_LENGTH;

  if (isNumber === false) throw Error(GAME_INPUT_ERRORS.INVALID_TARGET_TYPE);
  if (isInRange === false) throw Error(GAME_INPUT_ERRORS.INVALID_TARGET_RANGE);
  if (isUnique === false) throw Error(GAME_INPUT_ERRORS.INVALID_TARGET_DUPLICATED);
  if (isValidLength === false) throw Error(GAME_INPUT_ERRORS.INVALID_TARGET_LENGTH);
};

const validateBonusNumber = (bonus) => {
  const isNumber = _isNumber(bonus);
  const isInRange = _isInRange(bonus);

  if (isNumber === false) throw Error(GAME_INPUT_ERRORS.INVALID_BONUS_TYPE);
  if (isInRange === false) throw Error(GAME_INPUT_ERRORS.INVALID_BONUS_RANGE);
};

const validateBonusNumberNotInLottoNumber = (bonusNumber, targetNumbers) => {
  const isNotInTarget = targetNumbers.includes(bonusNumber) === false;

  if (isNotInTarget === false) {
    throw Error(GAME_INPUT_ERRORS.INVALID_INPUT_RANGE);
  }
};

module.exports = { validateLottoBudget, validateTargetNumber, validateBonusNumber };
