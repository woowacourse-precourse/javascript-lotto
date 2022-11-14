const { Random } = require('@woowacourse/mission-utils');
const { amountRegExp } = require('./constant');

const isRight = (regExp) => (amount) => {
  const target = amount.trim();
  return regExp.test(target);
};

const isMultipleOf1000 = isRight(amountRegExp);

const isLottoNumbers = (lottoNumbers, start, end, size) =>
  lottoNumbers.filter((num) => num >= start && num <= end).length === size;

const divide = (divider) => (share) => Number(share) / divider;
const divide1000 = divide(1000);

const getRandomNumbers = (start, end, size) => {
  const pickNums = [];

  while (pickNums.length < size) {
    const pickNum = Random.pickNumberInRange(start, end);
    if (!pickNums.includes(pickNum)) pickNums.push(pickNum);
  }

  pickNums.sort((a, b) => a - b);

  return pickNums;
};

const splitStr = (sep) => (str) => str.trim().split(sep);
const splitStrByComma = splitStr(',');

module.exports = { isMultipleOf1000, isLottoNumbers, divide1000, getRandomNumbers, splitStrByComma };
