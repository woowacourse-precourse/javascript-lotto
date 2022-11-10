const { readLine, print } = require('./utils/ui');
const random = require('./utils/random');
const validation = require('./validation');

class App {
  constructor() {
    this.userLottoCount = 0;
    this.userLottoBundle = [];
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      validation.isUnitOf1000(purchaseAmount);
      this.userLottoCount = purchaseAmount / 1000;
      this.generateUserLotto(this.userLottoCount);
      this.printUserLottoBundle();
    });
  }

  generateUserLotto(lottoCount) {
    for (let count = 0; count < lottoCount; count += 1) {
      const generatedLotto = random.pickUniqueNumbersInRange(1, 45, 6);
      this.userLottoBundle.push(generatedLotto);
    }
  }

  printUserLottoBundle() {
    print(`\n${this.userLottoCount}개를 구매했습니다.`);
    this.userLottoBundle.forEach((lotto) => {
      const sortedLotto = lotto.sort((prev, next) => prev - next).join(', ');
      print(`[${sortedLotto}]`);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
