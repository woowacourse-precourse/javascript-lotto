const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
const Lotto = require('./Lotto');
const { CONSOLE_MESSAGE, PARAMETERS, RESULT_MESSAGE } = require('./utils/constants');
const generateRandomSixDigits = require('./utils/RandomNumberGenerator');

class LottoGame {
  constructor() {
    this.exception = new Exception();
    this.lotto = null; 
    this.purchaseCount = 0;
    this.userLottoNumbers = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
  }

  start() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    MissionUtils.Console.readLine(`${CONSOLE_MESSAGE.purchaseAmount}\n`, (input) => {
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

    return this.getWinningNumber();
  }

  getWinningNumber() {
    MissionUtils.Console.readLine(`${CONSOLE_MESSAGE.winningNumber}\n`, (input) => {
      this.winningNumber = input.split(',').map(Number);
      this.lotto = new Lotto(this.winningNumber);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    MissionUtils.Console.readLine(`${CONSOLE_MESSAGE.bonusNumber}\n`, (input) => {
      this.bonusNumber = Number(input);
      this.exception.validateBonusNumber(input, this.winningNumber);
      this.getResult();
    });
  }

  getResult() {
    const [USER_LOTTO_RESULT, USER_PROFIT_RATE] = this.lotto.getResult(
      this.bonusNumber,
      this.userLottoNumbers,
      this.purchaseCount,
    );
    this.print(CONSOLE_MESSAGE.lottoResult);

    USER_LOTTO_RESULT.forEach((result) => {
      this.print(result);
    });

    this.print(RESULT_MESSAGE.profitRate(USER_PROFIT_RATE));

    MissionUtils.Console.close();
  }

  print(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = LottoGame;
