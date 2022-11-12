const { Random, Console } = require('@woowacourse/mission-utils');
const { LOTTO_OUTPUT } = require('./constants');

function createLottoNumbers(qauntity) {
  const purchaseLottoNumbers = [];

  for (let i = 1; i <= qauntity; i++) {
    purchaseLottoNumbers.push(Random.pickUniqueNumbersInRange(1, 45, 6));
  }

  printCreateLottoNumbers(purchaseLottoNumbers);
}

function printCreateLottoNumbers(lottoNumbers) {
  Console.print(`\n${lottoNumbers.length}${LOTTO_OUTPUT.LOTTO_QUANTITY}`);
  lottoNumbers.forEach((lotto) => {
    Console.print(lotto);
  });
}

module.exports = createLottoNumbers, printCreateLottoNumbers;
