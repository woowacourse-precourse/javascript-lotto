const { Random } = require('@woowacourse/mission-utils');
const { amountRegExp, AMOUNT_BY_RANK, SCORE_MSG_BY_RANK } = require('./constant');

const isRight = (regExp) => (amount) => {
  const target = amount.trim();
  return regExp.test(target);
};

const isMultipleOf1000 = isRight(amountRegExp);

const isLottoNumbers = (lottoNumbers, start, end, size) =>
  lottoNumbers.filter((num) => num >= start && num <= end).length === size;

const isDuplicated = (arr) => {
  const set = new Set([...arr]);
  return set.size !== arr.length;
};

const isInclude = (arr) => (elem) => arr.includes(elem);

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

const getRank = (score, bonusScore) => {
  switch (score) {
    case 6:
      return 1;
    case 5:
      return bonusScore === 1 ? 2 : 3;
    case 4:
      return 4;
    case 3:
      return 5;
    default:
      return 0;
  }
};

const getWinMessage = (rank, cnt) => {
  const scoreMsg = SCORE_MSG_BY_RANK[rank];
  const amountMsg = AMOUNT_BY_RANK[rank];

  return `${scoreMsg} (${amountMsg}원) - ${cnt}개`;
};

module.exports = {
  isMultipleOf1000,
  isLottoNumbers,
  isDuplicated,
  isInclude,
  divide1000,
  getRandomNumbers,
  splitStrByComma,
  getRank,
  getWinMessage,
};
