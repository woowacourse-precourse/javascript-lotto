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

const separateStringBySpecificCharacter = (string, charactor) => {
  return string.split(charactor);
};

const checkHowManyCorrect = (lotto, winningNumber, bonusNumber) => {
  return lotto.getLottoNumber().reduce(
    (prev, curr) => {
      if (winningNumber.includes(curr)) return { ...prev, correctCount: prev.correctCount + 1 };
      if (curr === bonusNumber) return { ...prev, bonus: prev.bonus + 1 };
      return prev;
    },
    { correctCount: 0, bonus: 0 },
  );
};
module.exports = { createLottoNumber, generateLottoNumber, separateStringBySpecificCharacter, checkHowManyCorrect };
