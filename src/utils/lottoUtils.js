const { Random } = require('@woowacourse/mission-utils');

const createLottoNumbers = () => {
  const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
  return lotto;
};

const convertWinningNumbers = (numbers) => {
  const replacedNumbers = numbers.replace(/[^-\,0-9]/g, '');
  return replacedNumbers
    .split(',')
    .filter((number) => number !== '')
    .map(Number);
};

module.exports = { createLottoNumbers, convertWinningNumbers };
