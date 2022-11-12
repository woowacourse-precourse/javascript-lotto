const { Console } = require("@woowacourse/mission-utils");

class App {

  play() {
    this.requestForLotto();
  }

  requestForLotto() {
    Console.readLine('구매 금액을 1,000단위로 입력해주세요.\n', moneyValue => {
      return moneyValue;
    });
  }
}

const app = new App();
app.play();

module.exports = App; 