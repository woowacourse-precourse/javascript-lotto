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
    this.bonus = 0;
    this.result = { 
      1: { count: 0, prize: MONEY.FIRST_PLACE },
      2: { count: 0, prize: MONEY.SECOND_PLACE },
      3: { count: 0, prize: MONEY.THIRD_PLACE },
      4: { count: 0, prize: MONEY.FOURTH_PLACE },
      5: { count: 0, prize: MONEY.LAST_PLACE },
    }}

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

  calcEarningsRate() {
    let total = 0;
    for (const key in this.result) {
      const { count, prize } = this.result[key];
      total += (count * prize);
    }
    const earningsRate = (total / this.purchaseAmount) * 100;
    return Math.round(earningsRate * 100) / 100;
  }

  setWinnigNumbers(numbers) {
    const lotto = new Lotto(numbers);
    this.winningNumbers = lotto.getNumbers();
  }

  setBonusNumber(number) {
    const bonus = new Bonus(number, this.winningNumbers);
    this.bonus = bonus.getNumber();
  }

  checkLottoResult() {
    this.lottos.forEach(lotto => {
      const rank = lotto.checkRank(this.winningNumbers, this.bonus);
      if (rank != 0) this.result[rank].count += 1;
    })
  }

  getResult() {
    userInput(COMMAND.INPUT_WINNING_NUMBERS, (numbers) => {
      this.setWinnigNumbers(numbers.split(','));
      userInput(COMMAND.INPUT_BOUNS_NUMBER, (number) => {
        this.setBonusNumber(number);
        this.printResult();
      })
    });
  }

  printResult() {
    this.checkLottoResult();
    printRankCountMessage(this.result);
    
    const earningsRate = this.calcEarningsRate();
    printRatioMessage(earningsRate);
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
