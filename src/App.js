const { Random } = require('@woowacourse/mission-utils');
const { LOTTO, COMMAND, MONEY, MESSAGE } = require('./constructor.js');
const { printMessage, userInput, printRankCountMessage, printRatioMessage } = require('./utils.js');
const Lotto = require('./Lotto.js');
const Bonus = require('./Bonus.js');
const Purchase = require('./Purchase.js');

class App {
  constructor() {
    this.purchaseAmount = 0;
    this.lottos = [];
    this.winningNumbers = [];
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

  setWinnigNumbers(numbers) {
    const lotto = new Lotto(numbers);
    this.winningNumbers = lotto.getNumbers();
  }

  getResult() {
    userInput(COMMAND.INPUT_WINNING_NUMBERS, (numbers) => {
      this.setWinnigNumbers(numbers.split(','));
    });
  }

  play() {
    userInput(COMMAND.INPUT_PURCHASE_AMOUNT, (number) => {
      const purchase = new Purchase(number);
      this.purchaseAmount = purchase.getPurchaseAmount();
      const count = purchase.getPublishCount();
      this.generateUserLottos(count);
      printMessage(`${count}${MESSAGE.PURCHASE_AMOUNT}`);
      this.lottos.forEach(lotto => printMessage(lotto.getNumbersToArrayFormat()));
      this.getResult();
    });
  }
}

module.exports = App;
