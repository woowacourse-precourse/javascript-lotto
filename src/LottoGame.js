const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
const { CONSOLE_MESSAGE, PARAMETERS, RESULT_MESSAGE } = require('./utils/constants');
const generateRandomSixDigits = require('./utils/RandomNumberGenerator');

class LottoGame {
  constructor() {
    this.exception = new Exception();
    this.purchaseCount = 0;
    this.userLottoNumbers = [];
  }

  start() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    MissionUtils.Console.readLine(`${CONSOLE_MESSAGE.purchaseAmount}`, (input) => {
      this.exception.validatePurchaseAmount(input);
      this.purchaseCount = input / PARAMETERS.purchaseAmountUnit;
      this.print(RESULT_MESSAGE.purchase(this.purchaseCount));
      this.generateAutoLottoNumbers();
    });
  }

  generateAutoLottoNumbers() {
    while (this.userLottoNumbers.length < this.purchaseCount) {
      const LOTTO_NUMBER = generateRandomSixDigits();
      this.print(`[${LOTTO_NUMBER.join(', ')}]`);
      this.userLottoNumbers.push(LOTTO_NUMBER);
    }

    return this.userLottoNumbers;
  }

  print(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = LottoGame;
