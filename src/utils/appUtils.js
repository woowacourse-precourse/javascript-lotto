const { Console } = require('@woowacourse/mission-utils');
const ERROR_MESSAGE = require('../constants/errorMessages');
const APP = require('../constants/app');
const LOTTO = require('../constants/lotto');
const prize = require('../constants/prize');

const isDivisible = (amount) => {
  if (amount % APP.MINIMUM_AMOUNT !== 0) return false;

  return true;
};

const validateAmount = (amount) => {
  if (Number.isNaN(Number(amount))) throw new Error(ERROR_MESSAGE.AMOUNT_ERROR);

  if (!isDivisible(amount)) throw new Error(ERROR_MESSAGE.DIVISIBLE_ERROR);
};

const isCorrectSeparator = (input) => input.search(APP.SEPARATOR_REGEX) !== -1;

const isNumberInRange = (number) => number >= LOTTO.FIRST_NUMBER && number <= LOTTO.LAST_NUMBER;

const hasOwnProperty = (obj, index) => Object.prototype.hasOwnProperty.call(obj, index);

const validatePrizeNumbers = (input) => {
  const map = {};
  const prizeNumbers = input.split(APP.SEPARATOR);

  if (!isCorrectSeparator(input)) throw new Error(ERROR_MESSAGE.SEPARATOR_ERROR);

  if (prizeNumbers.length !== 6) throw new Error(ERROR_MESSAGE.LENGTH_ERROR);

  prizeNumbers.forEach((item) => {
    const number = Number(item);

    if (Number.isNaN(number)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);

    if (!isNumberInRange(number)) throw new Error(ERROR_MESSAGE.RANGE_ERROR);

    if (hasOwnProperty(map, number)) throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
    map[number] = true;
  });
};

const validateBonusNumber = (input, prizeNumbers) => {
  const bonusNumber = Number(input);

  if (Number.isNaN(bonusNumber)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);

  if (!isNumberInRange(bonusNumber)) throw new Error(ERROR_MESSAGE.RANGE_ERROR);

  if (prizeNumbers.includes(bonusNumber)) throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
};

const arrayToString = (array) => `[${array.join(', ')}]`;

const printArray = (array) => {
  array.forEach((item) => Console.print(arrayToString(item)));
};

const printEmpty = () => {
  Console.print('');
};

const getEarningRate = (stats, amount) => {
  let totalAmount = 0;

  for (let i = 1; i < 6; i += 1) {
    totalAmount += stats[i] * prize[i];
  }

  const earningRate = (totalAmount / (amount * APP.MINIMUM_AMOUNT)) * 100;

  return earningRate.toFixed(1);
};

const addCommas = (target) => Number(target).toLocaleString('ko-KR');

const getResultText = (stats, amount) => {
  const earningRate = getEarningRate(stats, amount);

  const resultTexts = [
    '당첨 통계',
    '---',
    `3개 일치 (${addCommas(prize[5])}원) - ${stats[5]}개`,
    `4개 일치 (${addCommas(prize[4])}원) - ${stats[4]}개`,
    `5개 일치 (${addCommas(prize[3])}원) - ${stats[3]}개`,
    `5개 일치, 보너스 볼 일치 (${addCommas(prize[2])}원) - ${stats[2]}개`,
    `6개 일치 (${addCommas(prize[1])}원) - ${stats[1]}개`,
    `총 수익률은 ${addCommas(earningRate)}%입니다.`,
  ];

  return resultTexts;
};

module.exports = {
  validateAmount,
  validatePrizeNumbers,
  validateBonusNumber,
  printEmpty,
  printArray,
  getEarningRate,
  getResultText,
};
