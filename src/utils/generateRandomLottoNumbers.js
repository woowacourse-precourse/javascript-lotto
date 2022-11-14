const { Random } = require('@woowacourse/mission-utils');
const {
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  COUNT_OF_LOTTO_NUMBERS,
} = require('../constants/gameSetting');

function generateRandomLottoNumbers() {
  const randomLottoNumbers = Random.pickUniqueNumbersInRange(
    MIN_LOTTO_NUMBER,
    MAX_LOTTO_NUMBER,
    COUNT_OF_LOTTO_NUMBERS
  );
  return randomLottoNumbers.sort((a, b) => a - b);
}

module.exports = generateRandomLottoNumbers;
