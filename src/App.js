const Store = require('./Store');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const View = require('./View');
const { Console } = require('@woowacourse/mission-utils');
const { convertWinningNumbers, getLottoBundle } = require('./utils/lottoUtils');
const { MESSAGE } = require('./utils/constants');

class App {
  constructor() {
    this.view = new View();
    this.lotto = null;
    this.money = 0;
    this.lottoBundle = [];
    this.winningNumbers = [];
    this.bonus = 0;
  }

  play() {
    Console.readLine(MESSAGE.BUY, (money) => this.buyLotto(money));
  }

  buyLotto(money) {
    new Store(money);
    this.money = money;
    const amount = money / 1000;

    this.lottoBundle = getLottoBundle(amount);
    this.view.printBoughtLotto(amount, this.lottoBundle);
    this.createWinningNumbers();
  }

  createWinningNumbers() {
    Console.readLine(MESSAGE.CREATE_WINNING_NUMBERS, (numbers) => {
      this.winningNumbers = convertWinningNumbers(numbers);
      this.lotto = new Lotto(this.winningNumbers);
      this.createBonusNumber();
    });
  }

  createBonusNumber() {
    Console.readLine(MESSAGE.CREATE_BONUS_NUMBER, (number) => {
      this.bonus = Number(number);
      new Bonus(this.bonus, this.winningNumbers);
      this.createWinningStatistics();
    });
  }

  createWinningStatistics() {
    const result = this.lotto.getResult(this.lottoBundle);
    const profitRate = this.lotto.calculateProfitRate(result, this.money);
    this.view.printResult(result, profitRate);
  }
}

const app = new App();
app.play();

module.exports = App;
