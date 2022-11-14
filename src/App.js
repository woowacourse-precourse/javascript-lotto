const { Console } = require('@woowacourse/mission-utils');
const Calculator = require('./Calculator');
const ExceptionCheck = require('./ExceptionCheck');
const Lotto = require('./Lotto');
const Printer = require('./Printer');
const Utils = require('./Utils');

class App {
  constructor() {
    this.exeptionCheck = new ExceptionCheck();
    this.calculator = new Calculator();
    this.utils = new Utils();
    this.bonusNumber;
    this.winNumbers;
    this.LottoCount;
    this.lotto = null;
  }

  play() {
    this.requestForLotto();
  }

  requestForLotto() {
    Console.readLine('구매 금액을 1,000단위로 입력해주세요.\n', moneyValue => {
      this.exeptionCheck.userInputMoneyValue(moneyValue);
      this.lottoCount = this.calculator.ofPurchaseLottoCount(moneyValue);
      this.requestWinNumbers();
    });
  }

  requestWinNumbers() {
    Console.readLine('당첨번호를 입력해주세요.\n', userInput => {
      this.winNumbers = this.utils.transeStringToNumber(userInput);
      this.lotto = new Lotto(this.winNumbers);
      this.requestBonusnumber();
    });
  }

  requestBonusnumber() {
    Console.readLine('보너스 숫자를 입력해주세요\n', bonusNumber => {
      this.bonusNumber = this.utils.transeStringToNumber(bonusNumber);
      this.lotto.getBonusNumber(this.bonusNumber);
      this.printResult();
    });
  }

  printResult() {
    Console.print(`${this.lottoCount}개를 구매했습니다.`);
    this.lotto
      .bundleCreate(this.lottoCount)
      .forEach(lottoNums => Console.print(`[${lottoNums.join(', ')}]`));
  }
}

const app = new App();
app.play();

module.exports = App;
