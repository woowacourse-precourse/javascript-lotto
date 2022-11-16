const { Random } = require('@woowacourse/mission-utils');
const { ERROR } = require('./constants/constants.js');

const isAllDigit = (input, type) => {
  const possibleNumbers = Random.pickUniqueNumbersInRange(0, 9, 10).map((number) => String(number));
  if (input.split('').every((digit) => possibleNumbers.includes(digit))) return true;
  if (type === 'purchaseAmount') throw new Error(ERROR.INCLUDE_NOT_NUMBER_IN_PURCHASE_AMOUNT_ERROR);
  if (type === 'winningNumber') throw new Error(ERROR.INCLUDE_NOT_NUMBER_IN_WINNING_NUMBERS_ERROR);
  if (type === 'bonusNumber') throw new Error(ERROR.INCLUDE_NOT_NUMBER_IN_BONUS_NUMBER_ERROR);
};

const isFirstDigitNotZero = (purchaseAmountInput) => {
  if (purchaseAmountInput[0] !== '0') return true;
  throw new Error(ERROR.START_WITH_ZERO_ERROR);
};
const isDivisibleByThousand = (purchaseAmountInput) => {
  if (Number(purchaseAmountInput) % 1000 === 0) return true;
  throw new Error(ERROR.NOT_DIVISIBLE_BY_THOUSAND_ERROR);
};

const isValidPurchaseAmount = (purchaseAmountInput) => {
  return (
    isAllDigit(purchaseAmountInput, 'purchaseAmount') &&
    isFirstDigitNotZero(purchaseAmountInput) &&
    isDivisibleByThousand(purchaseAmountInput)
  );
};

const isWinningNumbersAllDigit = (input) => {
  if (input.split(',').every((el) => isAllDigit(el, 'winningNumber'))) return true;
};

const isSixNumbers = (input) => {
  if (input.split(',').length === 6) return true;
  throw new Error(ERROR.NOT_SIX_WINNING_NUMBERS_ERROR);
};

const isNumberInRange = (input) => {
  const possibleWinngNumbers = Random.pickUniqueNumbersInRange(1, 45, 45);
  return possibleWinngNumbers.includes(input);
};

const isAllNumberInRange = (input) => {
  if (
    input
      .split(',')
      .map((el) => Number(el))
      .every((number) => isNumberInRange(number))
  )
    return true;
  throw new Error(ERROR.WINNING_NUMBER_OUT_OF_RANGE_ERROR);
};
const isNotDuplicated = (input) => {
  const numbersArr = input.split(',').map((el) => Number(el));
  const numbersSet = new Set(numbersArr);
  if (numbersArr.length === numbersSet.size) return true;
  throw new Error(ERROR.WINNING_NUMBERS_DUPLICATED);
};

const isValidWinningNumbers = (input) => {
  return (
    isWinningNumbersAllDigit(input) &&
    isSixNumbers(input) &&
    isAllNumberInRange(input) &&
    isNotDuplicated(input)
  );
};

const isBonusNumberInRange = (input) => {
  if (isNumberInRange(Number(input))) return true;
  throw new Error(ERROR.BONUS_NUMBER_OUT_OF_RANGE_ERROR);
};

const isNotDuplicatedWithWinningNumbers = (input, winningNumbers) => {
  if (!winningNumbers.includes(Number(input))) return true;
  throw new Error(ERROR.BONUS_NUMBER_DUPLICATED_WITH_WINNING_NUMBERS);
};

const isValidBonusNumber = (input, winningNumbers) => {
  return (
    isAllDigit(input) &&
    isBonusNumberInRange(input) &&
    isNotDuplicatedWithWinningNumbers(input, winningNumbers)
  );
};

module.exports = {
  isValidPurchaseAmount,
  isValidWinningNumbers,
  isValidBonusNumber,
};
