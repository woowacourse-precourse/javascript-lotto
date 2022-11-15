const { Console } = require("@woowacourse/mission-utils");
const { STATISTIC_MESSAGE, ERROR_MESSAGE, LOTTO } = require("./constants");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map((number) => Number(number));
  }

  validate(numbers) {
    this.isSixNumber(numbers);
    this.isUniqueNumber(numbers);
    this.isOnlyNumbers(numbers);
    this.isInRange(numbers);
  }

  isSixNumber(numbers) {
    if (numbers.length !== LOTTO.WINNING_MAX)
      throw new Error(ERROR_MESSAGE.WINNING_SIX);
  }

  isUniqueNumber(numbers) {
    if (new Set(numbers).size !== LOTTO.WINNING_MAX)
      throw new Error(ERROR_MESSAGE.WINNING_DUPLICATE);
  }

  isOnlyNumbers(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(Number(number)))
        throw new Error(ERROR_MESSAGE.WINNING_NOT_NUMBER);
    });
  }

  isInRange(numbers) {
    const range = (number) =>
      Number(number) >= LOTTO.MIN_RANGE && Number(number <= LOTTO.MAX_RANGE);
    if (!numbers.every(range)) throw new Error(ERROR_MESSAGE.WINNING_RANGE);
  }

  isUniqueBonus(bonus) {
    if (this.#numbers.includes(bonus))
      throw new Error(ERROR_MESSAGE.BONUS_OVERLAP);
  }

  calculate(money, lottoList, bonus) {
    const matchCount = this.calculateMatch(lottoList, bonus);
    const rank = this.calculateRank(matchCount);
    this.showMatchResult(rank);
    this.showRateOfReturn(money, rank);
  }

  calculateMatch(lottoList, bonusNumber) {
    const totalWinner = [...this.#numbers, bonusNumber];
    return lottoList.map((list) => {
      let total = { winning: 0, bonus: 0 };
      totalWinner.forEach((x) => {
        if (list.includes(x) && x === bonusNumber) total.bonus += 1;
        else if (list.includes(x)) total.winning += 1;
      });
      return total;
    });
  }

  calculateRank(matchArray) {
    let rank = { 3: 0, 4: 0, 5: 0, 6: 0, alpha: 0 };
    matchArray.forEach((match) => {
      if (match.bonus === 1 && match.winning + match.bonus >= 3) {
        match.winning === 4
          ? (rank["alpha"] += 1)
          : (rank[match.winning + 1] += 1);
      } else if (match.bonus === 0 && match.winning >= 3) {
        rank[match.winning] += 1;
      }
    });
    return Object.values(rank);
  }

  showMatchResult(result) {
    Console.print(STATISTIC_MESSAGE.TITLE);
    Console.print(STATISTIC_MESSAGE.THREE(result[0]));
    Console.print(STATISTIC_MESSAGE.FOUR(result[1]));
    Console.print(STATISTIC_MESSAGE.FIVE(result[2]));
    Console.print(STATISTIC_MESSAGE.FIVE_ALPHA(result[4]));
    Console.print(STATISTIC_MESSAGE.SIX(result[3]));
  }

  showRateOfReturn(seedMoney, profit) {
    const totalProfit = profit.reduce(
      (totalPrice, win, idx) => totalPrice + win * LOTTO.PRIZE[idx],
      0,
    );
    const rateOfReturn = (totalProfit / seedMoney) * LOTTO.PERCENT;
    Console.print(STATISTIC_MESSAGE.EARN(rateOfReturn.toFixed(LOTTO.DECIMAL)));
    Console.close();
  }
}

module.exports = Lotto;
