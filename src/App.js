const { Console } = require("@woowacourse/mission-utils");
const Calculator = require("./Calculator");
const ExceptionCheck = require("./ExceptionCheck");
const Lotto = require("./Lotto");
const Printer = require("./Printer");

class App {
  constructor() {
    this.exeptionCheck = new ExceptionCheck;
    this.print = new Printer();
    this.calculator = new Calculator();
    this.LottoCount;
  }

  play() {
    this.requestForLotto();
  }

  requestForLotto() {
    Console.readLine('구매 금액을 1,000단위로 입력해주세요.\n', moneyValue => {
      this.exeptionCheck.userInputMoneyValue(moneyValue);
      this.lottoCount = this.calculator.ofPurchaseLottoCount(moneyValue);
    });
  }
}

const app = new App();
app.play();

module.exports = App; 