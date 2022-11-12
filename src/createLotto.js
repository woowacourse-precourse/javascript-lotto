const { Random } = require('@woowacourse/mission-utils');

function createLottoNumbers(qauntity) {
  const purchaseLottoNumbers = [];

  for (let i = 1; i <= qauntity; i++) {
    purchaseLottoNumbers.push(Random.pickUniqueNumbersInRange(1, 45, 6));
  }

  return purchaseLottoNumbers;
}

module.exports = createLottoNumbers;
