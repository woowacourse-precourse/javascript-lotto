const { Random } = require('@woowacourse/mission-utils');

const createLottoNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};

const sortAscendingOrderLottoNumber = (lottoNumber) => {
  return lottoNumber.sort((a, b) => a - b);
};

const generateLottoNumber = () => {
  const lottoNumber = createLottoNumber();
  const sortedLottoNumber = sortAscendingOrderLottoNumber(lottoNumber);
  return sortedLottoNumber;
};

module.exports = { generateLottoNumber };
