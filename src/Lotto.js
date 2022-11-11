const { Console } = require("@woowacourse/mission-utils");
const { STATISTIC_MESSAGE, ERROR_MESSAGE } = require("./constants");
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
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.WINNING_SIX);
  }

  isUniqueNumber(numbers) {
    if (new Set(numbers).size !== 6)
      throw new Error(ERROR_MESSAGE.WINNING_DUPLICATE);
  }

  isOnlyNumbers(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(Number(number)))
        throw new Error(ERROR_MESSAGE.WINNING_NOT_NUMBER);
    });
  }

  isInRange(numbers) {
    const range = (number) => Number(number) >= 1 && Number(number <= 45);
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
        if (match.winning === 4) rank["alpha"] += 1;
        else rank[match.winning + 1] += 1;
      } else if (match.bonus === 0 && match.winning >= 3) {
        rank[match.winning] += 1;
      }
    });
    return Object.values(rank);
  }

  showMatchResult(result) {
    Console.print(STATISTIC_MESSAGE.TITLE);
    Console.print(`${STATISTIC_MESSAGE.THREE} - ${result[0]}개`);
    Console.print(`${STATISTIC_MESSAGE.FOUR} - ${result[1]}개`);
    Console.print(`${STATISTIC_MESSAGE.FIVE} - ${result[2]}개`);
    Console.print(`${STATISTIC_MESSAGE.FIVE_ALPHA} - ${result[4]}개`);
    Console.print(`${STATISTIC_MESSAGE.SIX} - ${result[3]}개`);
  }

  showRateOfReturn(seedMoney, profit) {
    const priceByCorrect = [5000, 50000, 1500000, 2000000000, 30000000];
    const totalProfit = profit.reduce(
      (totalPrice, win, idx) => totalPrice + win * priceByCorrect[idx],
      0
    );
    const rateOfReturn = (totalProfit / seedMoney) * 100;
    Console.print(
      `${STATISTIC_MESSAGE.EARN}${rateOfReturn.toFixed(1)}%입니다.`
    );
    Console.close();
  }
}

module.exports = Lotto;
