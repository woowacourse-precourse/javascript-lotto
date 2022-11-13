const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.salesLotto();
  }

  salesLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      this.purchaseAmount = purchaseAmount;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
