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

const isSecondOrThird = (lotto, bonusNumber) => {
  if (lotto.includes(bonusNumber)) return 2;

  return 3;
};

const getKey = (count, lotto, bonusNumber) => {
  if (count === 6) return 1;
  if (count === 5) return isSecondOrThird(lotto, bonusNumber);
  if (count === 4) return 4;
  if (count === 3) return 5;

  return -1;
};

module.exports = {
  getSortedLottoNumbers,
  createLottos,
  getKey,
};
