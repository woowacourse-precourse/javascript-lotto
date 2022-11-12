const { Random } = require('@woowacourse/mission-utils');

function generateRandomLottoNumbers() {
  const randomLottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

  return randomLottoNumbers.sort((a, b) => a - b);
}

module.exports = generateRandomLottoNumbers;
