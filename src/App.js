const Store = require('./Store');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const View = require('./View');
const { Console } = require('@woowacourse/mission-utils');
const { convertWinningNumbers, getLottoBundle } = require('./utils/lottoUtils');
const { MESSAGE, WINNING_MONEY } = require('./utils/constants');

class App {
  play() {
    this.buyLotto();
    this.view = new View();
    this.money = 0;
    this.lottoBundle = [];
    this.winningNumbers = [];
    this.bonus = 0;
  }

  buyLotto() {
    Console.readLine(MESSAGE.BUY, (money) => {
      this.money = money;
      const store = new Store(money);
      const amount = money / 1000;
      this.lottoBundle = getLottoBundle(amount);
      this.view.printBoughtLotto(amount, this.lottoBundle);
      this.createWinningNumbers();
    });
  }

  createWinningNumbers() {
    Console.readLine(MESSAGE.CREATE_WINNING_NUMBERS, (numbers) => {
      this.winningNumbers = convertWinningNumbers(numbers);
      const lotto = new Lotto(this.winningNumbers);
      this.createBonusNumber();
    });
  }

  createBonusNumber() {
    Console.readLine(MESSAGE.CREATE_BONUS_NUMBER, (number) => {
      this.bonus = Number(number);
      new Bonus(this.bonus, this.winningNumbers);
      const result = this.getResult();
      const profitRate = this.calculateProfitRate(result);
      this.view.printResult(result, profitRate);
    });
  }

  getWinningRanking(boughtLotto) {
    const matchingNumbers = boughtLotto.filter((number) => this.winningNumbers.includes(number));
    const matchingCount = matchingNumbers.length;
    const hasBonus = boughtLotto.includes(this.bonus);

    if (matchingCount === 6) {
      return 1;
    }
    if (matchingCount === 5) {
      if (hasBonus) return 2;
      return 3;
    }
    if (matchingCount === 4) {
      return 4;
    }
    if (matchingCount === 3) {
      return 5;
    }
    return 0;
  }

  getResult() {
    const result = new Array(6).fill(0);
    this.lottoBundle.map((lotto) => {
      const ranking = this.getWinningRanking(lotto);
      result[ranking] += 1;
    });
    return result.slice(1, 6).reverse();
  }

  calculateProfitRate(result) {
    const profit = result.reduce((acc, cur, idx) => {
      return acc + WINNING_MONEY[idx] * cur;
    }, 0);

    const profitRate = (profit / this.money) * 100;
    return profitRate.toFixed(1);
  }
}

const app = new App();
app.play();

module.exports = App;
