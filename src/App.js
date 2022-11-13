const { Console } = require("@woowacourse/mission-utils");
const ExceptionCheck = require("./ExceptionCheck");
const Lotto = require("./Lotto");
const Printer = require("./Printer");

class App {
  constructor() {
    this.exeptionCheck = new ExceptionCheck;
    this.print = new Printer();
  }

  play() {
    this.requestForLotto();
  }

  requestForLotto() {
    Console.readLine('구매 금액을 1,000단위로 입력해주세요.\n', moneyValue => {
      this.exeptionCheck.userInputMoneyValue(moneyValue);
      const purchaseLottoCount = this.calculatorLottoCount(moneyValue);
      this.print.theNumberOfLotto(purchaseLottoCount);
    });
  }

  calculatorLottoCount(moneyValue) {
    return moneyValue / 1000;
  }



}

const app = new App();
app.play();

module.exports = App; 