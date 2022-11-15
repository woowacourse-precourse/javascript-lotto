const { Random } = require('@woowacourse/mission-utils');

const createSelectedRangeArray = (min, max, count) => {
  return Random.pickUniqueNumbersInRange(min, max, count);
};

const sortAscendingOrder = (arr) => {
  return arr.sort((a, b) => a - b);
};

const generateSortedRandomNumber = (min, max, count) => {
  const randomeNumberArray = createSelectedRangeArray(min, max, count);
  const sortedLottoNumberArray = sortAscendingOrder(randomeNumberArray);
  return sortedLottoNumberArray;
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
module.exports = {
  createSelectedRangeArray,
  generateSortedRandomNumber,
  separateStringBySpecificCharacter,
  checkHowManyCorrect,
};
