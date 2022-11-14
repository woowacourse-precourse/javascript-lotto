const Mission = require("@woowacourse/mission-utils");
const { LOTTO_INFO, RESULT_MESSAGES } = require("../utils/Constants");

class Result {
  #profit;
  #scoreArray;

  constructor(myLottoArray, winningNumbers, bonusNumber, amount, payment) {
    this.#scoreArray = Array(5).fill(0);
    this.myLottoArray = myLottoArray;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.amount = amount;
    this.payment = payment;
    this.checkMatchNumber();
  }

  checkMatchNumber() {
    this.myLottoArray.forEach((item, index) => this.countMatchNumber(item, index));
    this.announceScore();
  }

  countMatchNumber(item, index) {
    const accum = item.reduce((acc, cur) => {
      if (this.winningNumbers.includes(cur)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    this.addScoreArray(accum, index);
  }

  addScoreArray(accum, index) {
    if (accum === 3) {
      this.#scoreArray[0] += 1;
    }
    if (accum === 4) {
      this.#scoreArray[1] += 1;
    }
    if (accum === 5) {
      this.checkIncludeBonus(index);
    }
    if (accum === 6) {
      this.#scoreArray[4] += 1;
    }
  }

  checkIncludeBonus(index) {
    if (this.myLottoArray[index].includes(this.bonusNumber)) {
      this.#scoreArray[3] += 1;
    }

    if (!this.myLottoArray[index].includes(this.bonusNumber)) {
      this.#scoreArray[2] += 1;
    }
  }

  announceScore() {
    Mission.Console.print(RESULT_MESSAGES.WINNING_STATISTICS);
    Mission.Console.print(this.printScore());
    this.calculateProfit();
  }

  printScore() {
    return RESULT_MESSAGES.PRINT_RESULT(
      [3, 4, 5, 5, 6],
      [
        this.#scoreArray[0],
        this.#scoreArray[1],
        this.#scoreArray[2],
        this.#scoreArray[3],
        this.#scoreArray[4],
      ]
    );
  }

  calculateProfit() {
    this.#profit =
      this.#scoreArray[0] * LOTTO_INFO.FIFTH_PRIZE +
      this.#scoreArray[1] * LOTTO_INFO.FOURTH_PRIZE +
      this.#scoreArray[2] * LOTTO_INFO.THRID_PRIZE +
      this.#scoreArray[3] * LOTTO_INFO.SECOND_PRIZE +
      this.#scoreArray[4] * LOTTO_INFO.FIRST_PRIZE;
  }

  totalProfitRate() {
    return RESULT_MESSAGES.TOTAL_PROFIT_RATE(this.#profit, this.payment);
  }
}

module.exports = Result;
