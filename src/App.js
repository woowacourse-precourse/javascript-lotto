const { readLine } = require('./utils/ui');
const validation = require('./validation');

class App {
  constructor() {
    this.purchaseAmount = 0;
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    readLine('구입금액을 입력해 주세요.\n', (amount) => {
      validation.isUnitOf1000(amount);
      this.purchaseAmount = amount;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
