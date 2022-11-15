const { Console } = require("@woowacourse/mission-utils");
const {
  RESULT_COUNT,
  RESULT_CORRECT,
  LOTTO_PRICE,
} = require("./util/Constant");

class Result {
  #bought;
  #win;
  #bonus;
  #buyCount;
  #result;

  constructor(bought, win, bonus, buyCount) {
    this.#bought = bought;
    this.#win = win;
    this.#bonus = bonus;
    this.#buyCount = buyCount;
    this.#result = {
      three: 0,
      four: 0,
      five: 0,
      fiveBonus: 0,
      six: 0,
      income: 0,
    };
    this.calculateWin();
  }

  calculateWin() {
    const userLotto = this.#bought;
    const winLotto = this.#win;
    const bonus = this.#bonus;

    userLotto.forEach((lotto) => {
      this.getResult(lotto, winLotto, bonus);
    });
    this.printStats();
  }

  printStats() {
    const result = this.#result;
    Console.print(RESULT_CORRECT.STAT);
    Console.print(RESULT_CORRECT.THREE(result["three"]));
    Console.print(RESULT_CORRECT.FOUR(result["four"]));
    Console.print(RESULT_CORRECT.FIVE(result["five"]));
    Console.print(RESULT_CORRECT.FIVE_BONUS(result["fiveBonus"]));
    Console.print(RESULT_CORRECT.SIX(result["six"]));
    Console.print(RESULT_CORRECT.YIELD(this.calculateProfit(result["income"])));
  }

  getResult(lotto, winLotto, bonus) {
    const winCount = this.checkIntersection(lotto, winLotto);
    const bonusCount = this.checkBonus(lotto, bonus);

    switch (winCount) {
      case RESULT_COUNT.SIX:
        this.winSix();
        break;
      case RESULT_COUNT.FIVE:
        this.winFive(bonusCount);
        break;
      case RESULT_COUNT.FOUR:
        this.winFour();
        break;
      case RESULT_COUNT.THREE:
        this.winThree();
        break;
    }
  }
  winSix() {
    this.#result.six += 1;
    this.#result.income += RESULT_COUNT.SIX_PRIZE;
  }
  winFiveBonus() {
    this.#result.fiveBonus += 1;
    this.#result.income += RESULT_COUNT.FIVE_BONUS_PRIZE;
  }
  winFive(bonusCount) {
    if (bonusCount) {
      this.winFiveBonus();
      return;
    }
    this.#result.five += 1;
    this.#result.income += RESULT_COUNT.FIVE_PRIZE;
  }
  winFour() {
    this.#result.four += 1;
    this.#result.income += RESULT_COUNT.FOUR_PRIZE;
  }
  winThree() {
    this.#result.three += 1;
    this.#result.income += RESULT_COUNT.THREE_PRIZE;
  }
  checkIntersection(lotto, winLotto) {
    const intersection = lotto.filter((num) => winLotto.includes(num));
    return intersection.length;
  }
  checkBonus(lotto, bonus) {
    if (lotto.includes(bonus)) {
      return 1;
    }
    return 0;
  }
  calculateProfit(income) {
    const profit = (income * 100) / (this.#buyCount * LOTTO_PRICE);
    const roundProfit = profit.toFixed(1);
    const commaRoundProfit = roundProfit
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return commaRoundProfit;
  }
}

module.exports = Result;
