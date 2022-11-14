const { Console } = require('@woowacourse/mission-utils');
const LottoManager = require('./LottoManager');

class App {
  constructor() {
    this.lottoManager = new LottoManager();
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      const lottoArray = this.lottoManager.issueLotto(purchaseAmount);
    });
  }

  printNumberOfLotto() {}
}

const app = new App();
app.play();

module.exports = App;
