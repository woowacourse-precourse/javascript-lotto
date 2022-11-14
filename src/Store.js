const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { ERROR_MESSAGES } = require('./constants/index');

const LOTTO_PRICE = 1_000;

const MIN_WINNING_COUNT = 3;
const WINNING_MONEY = [5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000];

class Store {
  #money;
  #winningLotto;
  #randomLottos = [];

  #validateMoney(money) {
    if (money % LOTTO_PRICE !== 0)
      throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);
  }
  setMoney(money) {
    this.#validateMoney(money);
    this.#money = money;
  }
  setLottos(numbers) {
    this.#winningLotto = new Lotto(numbers);
  }
  setBonus(number) {
    this.#winningLotto.setBonus(number);
  }

  getBuyLottoCount() {
    return Number(this.#money / LOTTO_PRICE);
  }
  getCorrectCount() {
    const correctPoints = [0, 0, 0, 0, 0];
    const { winningNumbers, bonus } = this.#winningLotto.getLotto();

    this.#randomLottos.forEach((randomLotto) => {
      let correctCount = randomLotto.filter((number) =>
        winningNumbers.includes(number)
      ).length;

      if (correctCount === 5 && randomLotto.includes(bonus)) {
        correctCount++;
      }

      if (correctCount >= MIN_WINNING_COUNT) {
        correctPoints[Number(correctCount) - MIN_WINNING_COUNT]++;
      }
    });

    return correctPoints;
  }
  getWinningMoney(correctPoints = []) {
    const money = correctPoints.reduce(
      (acc, point, index) => (acc += WINNING_MONEY[index] * point),
      0
    );
    return money;
  }
  getWinningRate(correctPoints = []) {
    const winningMoney = this.getWinningMoney(correctPoints);
    return this.formatRate((winningMoney / this.#money) * 100);
  }

  formatRate(money) {
    return Math.round(money * 10) / 10;
  }
  createRandomLottos() {
    const count = this.getBuyLottoCount();

    for (let index = 0; index < count; index++) {
      const randomLotto = Lotto.createRandomNumbers();
      this.#randomLottos.push(randomLotto);
      Console.print(`[${randomLotto.join(', ')}]`);
    }
  }
}

module.exports = Store;
