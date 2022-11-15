const { Console } = require('@woowacourse/mission-utils');
const Calculator = require('./Calculator');
const ExceptionCheck = require('./ExceptionCheck');
const Lotto = require('./Lotto');
const Printer = require('./Printer');
const Utils = require('./Utils');
const { LOTTO_MSG } = require('./Constants.js');

class App {
  constructor() {
    this.exeptionCheck = new ExceptionCheck();
    this.calculator = new Calculator();
    this.utils = new Utils();
    this.bonusNumber;
    this.winNumbers;
    this.LottoCount;
    this.lotto = null;
    this.bundle;
  }

  play() {
    this.requestForLotto();
  }

  requestForLotto() {
    Console.readLine(LOTTO_MSG.RQEUEST_MONEY, moneyValue => {
      this.exeptionCheck.userInputMoneyValue(moneyValue);
      this.lottoCount = this.calculator.ofPurchaseLottoCount(moneyValue);
      this.requestWinNumbers();
    });
  }

  requestWinNumbers() {
    Console.readLine(LOTTO_MSG.RQEUEST_WIN_NUMBE, userInput => {
      this.winNumbers = this.utils.transeStringToNumber(userInput);
      this.lotto = new Lotto(this.winNumbers);
      this.requestBonusnumber();
    });
  }

  requestBonusnumber() {
    Console.readLine(LOTTO_MSG.RQEUEST_BONUS_NUMBER, bonusNumber => {
      this.bonusNumber = this.utils.transeStringToNumber(bonusNumber);
      this.lotto.getBonusNumber(this.bonusNumber);
      this.printResult();
    });
  }

  printResult() {
    Console.print(LOTTO_MSG.PURCHASE_COUNT(this.lottoCount));
    this.lotto.bundleCreate(this.lottoCount).forEach(lottoNums => Console.print(`[${lottoNums.join(', ')}]`));
    this.bundle = this.lotto.getBundle();
    this.lotto.bundleVerifyForWin(this.winNumbers, this.bonusNumber, this.bundle);
    this.lotto.print();
  }
}

const app = new App();
app.play();

module.exports = App;
