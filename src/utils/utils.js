const { Random } = require('@woowacourse/mission-utils');
const LOTTO = require('../constants/lotto');

const ascendingOrder = (value1, value2) => value1 - value2;

const getSortedLottoNumbers = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(
    LOTTO.FIRST_NUMBER,
    LOTTO.LAST_NUMBER,
    LOTTO.AMOUNT,
  );

  lottoNumbers.sort(ascendingOrder);

  return lottoNumbers;
};

const createLottos = (amount) => {
  const lottos = [];

  for (let i = 0; i < amount; i += 1) {
    const lottoNumbers = getSortedLottoNumbers();

    lottos.push(lottoNumbers);
  }

  return lottos;
};

module.exports = {
  getSortedLottoNumbers,
  createLottos,
};
