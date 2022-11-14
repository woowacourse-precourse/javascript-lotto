const { Console } = require("@woowacourse/mission-utils");
const Calculator = require("./Calculator");
const ExceptionCheck = require("./ExceptionCheck");
const Lotto = require("./Lotto");
const Utils = require("./Utils");

class App {
  constructor() {
    this.exeptionCheck = new ExceptionCheck;
    this.calculator = new Calculator();
    this.utils = new Utils;
    this.winNumbers;
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

  requestWinNumbers() {
    Console.readLine('당첨번호를 입력해주세요.\n', userInput => {
      this.winNumbers = this.utils.transeStringToNumber(userInput);
    });
  }
}

const app = new App();
app.play();

module.exports = App; 