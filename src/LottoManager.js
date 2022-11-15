const Lotto = require('./Lotto');
const Utils = require('./utils/Utils');
const { PRIZE, LOTTO } = require('./utils/const');
const { ERROR } = require('./utils/messages');

class LottoManager {
  #winningNumbers;
  #bonusNumber;

  setWinningNumbers(winningNumbers) {
    const lotto = new Lotto(winningNumbers);
    this.#winningNumbers = lotto.getNumbers();
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  validateDuplicate(bonusNumber) {
    if (this.#winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(ERROR.DUPLICATE);
    }
  }

  validateInteger(bonusNumber) {
    const number = Number(bonusNumber);
    if (
      !Number.isInteger(number) ||
      number < LOTTO.MIN_NUMBER ||
      number > LOTTO.MAX_NUMBER
    ) {
      throw new Error(ERROR.LOTTO_BOUND);
    }
  }

  #validate(bonusNumber) {
    this.validateDuplicate(bonusNumber);
    this.validateInteger(bonusNumber);
  }

  setBonusNumber(bonusNumber) {
    this.#validate(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  generateNumbersList(amount) {
    const list = [];

    for (let i = 0; i < amount / LOTTO.PRICE; i++) {
      const randomNumbers = Utils.getRandomNumbers(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.MAX_COUNT
      );

      const lottoNumbers = this.publishLotto(randomNumbers);
      list.push(lottoNumbers);
    }

    return list;
  }

  publishLotto(numbers) {
    const lotto = new Lotto(numbers);
    return lotto.getNumbers();
  }

  countSame(userNumbers) {
    let count = 0;
    let isBonusCorrect = false;

    userNumbers.forEach((userNumber) => {
      if (this.#winningNumbers.includes(userNumber)) count += 1;
      if (userNumber === this.#bonusNumber) isBonusCorrect = true;
    });

    return { count, isBonusCorrect };
  }

  getPrize(count, isBonusCorrect) {
    if (isBonusCorrect && count === 5) {
      return 'second';
    }

    const shiftedCount = Math.max(count - 2, 0);

    return PRIZE.LIST_WITHOUT_SECOND[shiftedCount];
  }

  getPrizes(userNumbersList) {
    const prizes = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    userNumbersList.forEach((userNumbers) => {
      const countInfo = this.countSame(userNumbers);
      const { count, isBonusCorrect } = countInfo;
      const prize = this.getPrize(count, isBonusCorrect);

      if (prize !== 'none') prizes[prize] += 1;
    });

    return prizes;
  }

  calculateRevenue(statistics, amount) {
    let sum = 0;

    Object.entries(statistics).forEach((statistic) => {
      const [type, count] = statistic;
      sum += PRIZE.REWARD[type] * count;
    });

    const revenue = (sum / amount) * 100;

    return revenue.toFixed(1);
  }

  generateStatistics(amount, userNumbersList) {
    const prizes = this.getPrizes(userNumbersList);
    const revenue = this.calculateRevenue(prizes, amount);

    return { prizes, revenue };
  }
}

module.exports = LottoManager;
