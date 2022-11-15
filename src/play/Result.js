const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_INFO, RESULT_MESSAGES } = require("../utils/Constants");

class Result {
  #profit;
  #scoreArray;
  #lottoScore;
  #totalProfitRate;

  constructor(winningNumbers, myLottoArray, bonusNumber, payment) {
    this.#scoreArray = Array(5).fill(0);
    this.winningNumbers = winningNumbers;
    this.myLottoArray = myLottoArray;
    this.bonusNumber = bonusNumber;
    this.payment = payment;
    this.checkMatchNumber();
    this.makeLottoResult();
  }

  checkMatchNumber() {
    this.myLottoArray.forEach((item, index) => this.countMatchNumber(item, index));
  }

  countMatchNumber(item, index) {
    const matchingNumberStack = item.reduce((acc, cur) => {
      if (this.winningNumbers.includes(cur)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    this.addScoreArray(matchingNumberStack, index);
  }

  addScoreArray(matchingNumberStack, index) {
    if (matchingNumberStack === 3) {
      this.#scoreArray[0] += 1;
    }
    if (matchingNumberStack === 4) {
      this.#scoreArray[1] += 1;
    }
    if (matchingNumberStack === 5) {
      this.checkIncludeBonus(index);
    }
    if (matchingNumberStack === 6) {
      this.#scoreArray[4] += 1;
    }
  }

  checkIncludeBonus(index) {
    if (this.myLottoArray[index].includes(this.bonusNumber)) {
      this.#scoreArray[3] += 1;
      return;
    }
    this.#scoreArray[2] += 1;
    return;
  }

  makeLottoResult() {
    this.calculateProfit();
    this.calculateScore();
    this.calculateTotalProfitRate();
  }

  calculateProfit() {
    this.#profit =
      this.#scoreArray[0] * LOTTO_INFO.FIFTH_PRIZE +
      this.#scoreArray[1] * LOTTO_INFO.FOURTH_PRIZE +
      this.#scoreArray[2] * LOTTO_INFO.THRID_PRIZE +
      this.#scoreArray[3] * LOTTO_INFO.SECOND_PRIZE +
      this.#scoreArray[4] * LOTTO_INFO.FIRST_PRIZE;
  }

  calculateScore() {
    this.#lottoScore = RESULT_MESSAGES.PRINT_RESULT(
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

  calculateTotalProfitRate() {
    this.#totalProfitRate = RESULT_MESSAGES.TOTAL_PROFIT_RATE(this.#profit, this.payment);
  }

  announceScore() {
    Console.print(RESULT_MESSAGES.WINNING_STATISTICS);
    Console.print(this.#lottoScore);
    Console.print(this.#totalProfitRate);
  }
}

module.exports = Result;
