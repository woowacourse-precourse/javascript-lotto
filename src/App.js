const { Console } = require("@woowacourse/mission-utils");
const ExceptionCheck = require("./ExceptionCheck");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.exeptionCheck = new ExceptionCheck;
  }

  play() {
    this.requestForLotto();
  }

  requestForLotto() {
    Console.readLine('구매 금액을 1,000단위로 입력해주세요.\n', moneyValue => {
      this.exeptionCheck.userInputMoneyValue(moneyValue);
    });
  }
}

const app = new App();
app.play();

module.exports = App; 