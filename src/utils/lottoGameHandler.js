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

module.exports = {
  createSelectedRangeArray,
  generateSortedRandomNumber,
  separateStringBySpecificCharacter,
};
