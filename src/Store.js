const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');

const { ERROR_MESSAGES } = require('./constants/index');
const { roundOneDecimal } = require('./utils/formatNumber');
const { WINNINGS } = require('./utils/winningResult');

const LOTTO_PRICE = 1_000;
const MIN_WINNING_COUNT = 3;

class Store {
  #money;
  #winningLotto;
  #randomLottos = [];

  #validateMoney(money) {
    if (!money) {
      throw new Error(ERROR_MESSAGES.NOT_INPUT_MONEY);
    }
    if (money % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);
    }
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

    console.log(winningNumbers);

    this.#randomLottos.forEach((randomLotto) => {
      let correctCount = randomLotto.filter((number) =>
        winningNumbers.includes(number)
      ).length;

      console.log(correctCount);

      if (correctCount === 5 && randomLotto.includes(bonus)) {
        correctCount++;
      } else if (correctCount === 6) {
        correctCount++;
      }

      if (correctCount >= MIN_WINNING_COUNT) {
        console.log(randomLotto);
        console.log(correctCount);
        correctPoints[correctCount - MIN_WINNING_COUNT]++;
      }
    });

    return correctPoints;
  }
  getWinningMoney(correctPoints = []) {
    const money = correctPoints.reduce(
      (acc, point, index) => (acc += WINNINGS[index] * point),
      0
    );
    return money;
  }
  getWinningRate(correctPoints = []) {
    const winningMoney = this.getWinningMoney(correctPoints);

    return roundOneDecimal((winningMoney / this.#money) * 100);
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
