const { readLine } = require('./utils/ui');
const random = require('./utils/random');
const validation = require('./validation');

class App {
  constructor() {
    this.purchaseAmount = 0;
    this.userLottoBundle = [];
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    readLine('구입금액을 입력해 주세요.\n', (amount) => {
      validation.isUnitOf1000(amount);
      this.purchaseAmount = amount;
      this.generateUserLotto(amount);
    });
  }

  generateUserLotto(amount) {
    const lottoCount = amount / 1000;
    for (let count = 0; count < lottoCount; count += 1) {
      const generatedLotto = random.pickUniqueNumbersInRange(1, 45, 6);
      this.userLottoBundle.push(generatedLotto);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
