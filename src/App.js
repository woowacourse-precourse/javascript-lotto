const { Console } = require('@woowacourse/mission-utils');
const Calculator = require('./Calculator');
const ExceptionCheck = require('./ExceptionCheck');
const Lotto = require('./Lotto');
const Printer = require('./Printer');
const Utils = require('./Utils');
const { LOTTO_RESULT_MSG, LOTTO_RQUEST_MSG } = require('./Constants.js');

class App {
  constructor() {
    this.exeptionCheck = new ExceptionCheck();
    this.calculator = new Calculator();
    this.utils = new Utils();
    this.print = new Printer();
    this.LottoCount;
    this.lotto;
    this.lottoResult;
  }

  play() {
    this.requestForLotto();
  }

  requestForLotto() {
    Console.readLine(LOTTO_RQUEST_MSG.MONEY, moneyValue => {
      this.exeptionCheck.userInputMoneyValue(moneyValue);
      this.lottoCount = this.calculator.ofPurchaseLottoCount(moneyValue);
      this.requestWinNumbers();
    });
  }

  requestWinNumbers() {
    Console.readLine(LOTTO_RQUEST_MSG.WIN_NUMBE, userInput => {
      this.lotto = new Lotto(this.utils.transeStringToNumber(userInput));
      this.requestBonusnumber();
    });
  }

  requestBonusnumber() {
    Console.readLine(LOTTO_RQUEST_MSG.BONUS_NUMBER, bonusNumber => {
      this.lotto.setBonusNumber(bonusNumber);
      this.lottoVerification();
    });
  }

  lottoVerification() {
    this.print.purchaseCount(LOTTO_RESULT_MSG.PURCHASE_COUNT(this.lottoCount));
    this.print.purchaseLottoBundle(this.lotto.bundleCreate(this.lottoCount));
    this.checkYourLuck();
  }

  checkYourLuck() {
    this.lottoResult = this.lotto.getResultMap();
    this.print.lottoResult(this.lottoResult);
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
