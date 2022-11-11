const { ERROR, WINNING_MONEY } = require('./utils/constants');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.NOT_ENOUGH_NUMBER);
    }

    if (/[^\,0-9]/.test(String(numbers))) {
      throw new Error(ERROR.NOT_A_NUMBER);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR.DUPLICATE);
    }

    if (Math.min(...numbers) <= 0 || Math.max(...numbers) > 45) {
      throw new Error(ERROR.OUT_OF_RANGE);
    }
  }

  getResult(lottoBundle, bonus) {
    const result = new Array(6).fill(0);
    lottoBundle.map((lotto) => {
      const matchingCount = lotto.filter((number) => this.#numbers.includes(number)).length;
      const hasBonus = lotto.includes(bonus);
      const ranking = this.getWinningRanking(matchingCount, hasBonus);
      result[ranking] += 1;
    });
    return result.slice(1, 6).reverse();
  }

  getWinningRanking(matchingCount, hasBonus) {
    if (matchingCount === 6) {
      return 1;
    }
    if (hasBonus && matchingCount === 5) {
      return 2;
    }
    if (matchingCount === 5) {
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

  calculateProfitRate(result, money) {
    const profit = result.reduce((acc, cur, idx) => {
      return acc + WINNING_MONEY[idx] * cur;
    }, 0);
    const profitRate = (profit / money) * 100;
    return profitRate.toFixed(1);
  }
}

module.exports = Lotto;
