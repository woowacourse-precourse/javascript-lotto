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

const getLottoBundle = (amount) => {
  const lottoBundle = [];
  while (amount--) {
    const lotto = createLottoNumbers();
    lottoBundle.push(lotto);
  }
  return lottoBundle;
};

module.exports = { createLottoNumbers, convertWinningNumbers, getLottoBundle };
