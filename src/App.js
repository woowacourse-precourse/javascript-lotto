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
      const purchase = new Purchase(amount);
      this.purchaseAmount = purchase.getPurchaseAmount();
      
      const publishCount = purchase.getPublishCount();
      printMessage(`${publishCount}개 구매했습니다.`);
      
      this.generateUserLottos(publishCount);
      this.lottos.forEach(lotto => printMessage(lotto.getNumbers()));
    });
  }
}

module.exports = App;
