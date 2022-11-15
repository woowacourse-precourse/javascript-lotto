const { Random } = require('@woowacourse/mission-utils');
const LOTTO = require('../constants/lotto');
const PRIZE = require('../constants/prize');

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

const getKey = (correctCount, lotto, bonusNumber) => {
  switch (correctCount) {
    case 3:
      return 5;
    case 4:
      return 4;
    case 5:
      return isSecondOrThird(lotto, bonusNumber);
    case 6:
      return 1;
    default:
      return -1;
  }
};

const getEarningRate = (stats, amount) => {
  let totalAmount = 0;

  for (let i = 1; i < 6; i += 1) {
    totalAmount += stats[i] * PRIZE[i];
  }

  const earningRate = (totalAmount / (amount * LOTTO.UNIT)) * 100;

  return earningRate.toFixed(1);
};

const addCommas = (target) => Number(target).toLocaleString('ko-KR');

const getResultTexts = (stats, amount) => {
  const earningRate = getEarningRate(stats, amount);

  const resultTexts = [
    '당첨 통계',
    '---',
    `3개 일치 (${addCommas(PRIZE[5])}원) - ${addCommas(stats[5])}개`,
    `4개 일치 (${addCommas(PRIZE[4])}원) - ${addCommas(stats[4])}개`,
    `5개 일치 (${addCommas(PRIZE[3])}원) - ${addCommas(stats[3])}개`,
    `5개 일치, 보너스 볼 일치 (${addCommas(PRIZE[2])}원) - ${addCommas(stats[2])}개`,
    `6개 일치 (${addCommas(PRIZE[1])}원) - ${addCommas(stats[1])}개`,
    `총 수익률은 ${addCommas(earningRate)}%입니다.`,
  ];

  return resultTexts;
};

module.exports = {
  getSortedLottoNumbers,
  createLottos,
  getKey,
  getEarningRate,
  getResultTexts,
};
