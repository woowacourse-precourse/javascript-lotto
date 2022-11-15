const Money = require('./Money');

const { PRICE, MIN_WINNING_COUNT, WINNINGS } = require('../constants/Lotto');

const { roundOneDecimal } = require('../utils/formatNumber');

class Store {
  #money;

  setMoney(number) {
    this.#money = new Money(number);
  }

  getBuyLottoCount() {
    return Number(this.#money.inputMoney / PRICE);
  }

  getCorrectCount({ randomLottos = [], winningNumbers, bonus }) {
    const correctPoints = [0, 0, 0, 0, 0];

    randomLottos.forEach((randomLotto) => {
      let correctCount = randomLotto.filter((number) =>
        winningNumbers.includes(number)
      ).length;

      if (correctCount === 5 && randomLotto.includes(bonus)) {
        correctCount++;
      } else if (correctCount === 6) {
        correctCount++;
      }

      if (correctCount >= MIN_WINNING_COUNT) {
        correctPoints[correctCount - MIN_WINNING_COUNT]++;
      }
    });

    return correctPoints;
  }

  #getWinningMoney(correctPoints = []) {
    return correctPoints.reduce(
      (acc, point, index) => (acc += WINNINGS[index] * point),
      0
    );
  }
  getWinningRate(correctPoints = []) {
    const winningMoney = this.#getWinningMoney(correctPoints);
    return roundOneDecimal((winningMoney / this.#money.inputMoney) * 100);
  }
}

module.exports = Store;
