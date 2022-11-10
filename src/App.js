const { Random } = require('@woowacourse/mission-utils');
const { LOTTO, COMMAND, ERROR, MONEY, MESSAGE } = require('./constructor.js');
const { printMessage, userInput, throwErrorMessage } = require('./utils.js');
const Lotto = require('./Lotto.js');
const Bonus = require('./Bonus.js');
const Purchase = require('./Purchase.js');

class App {
  constructor() {
    this.purchaseAmount = 0;
    this.lottos = [];
  }

  getPurchaseInfo(amount) {
    const purchase = new Purchase(amount);
    return { purchaseAmount: purchase.getPurchaseAmount(), count: purchase.getPublishCount() };
  }

  createRandomLottoNumbers() {
    const randoms = Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH);
    return randoms.sort((num1, num2) => num1 - num2);
  }

  generateUserLottos(count) {
    for (let number = 0; number < count; number++) {
      const randoms = this.createRandomLottoNumbers();
      this.lottos.push(new Lotto(randoms));
    }
  }

  play() {
    userInput(COMMAND.INPUT_PURCHASE_AMOUNT, (amount) => {
      const purchaseInfo = this.getPurchaseInfo(amount);
      this.purchaseAmount = purchaseInfo.amount;
      this.generateUserLottos(purchaseInfo.count);
      this.lottos.forEach(lotto => printMessage(lotto.getNumbers()));
    });
  }
}

module.exports = App;
