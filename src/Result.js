const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_INFO, RESULT_MESSAGES } = require("./Constants");

class Result {
  #profit;
  #scoreBoard = {
    matchThree: 0,
    matchFour: 0,
    matchFive: 0,
    matchFiveBonus: 0,
    matchSix: 0,
  };
  #totalProfitRate;

  constructor(winningNumbers, myLottoArray, bonusNumber, payment) {
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

    this.updateScoreBoard(matchingNumberStack, index);
  }

  updateScoreBoard(matchingNumberStack, index) {
    if (matchingNumberStack === 3) {
      this.#scoreBoard["matchThree"] += 1;
    }
    if (matchingNumberStack === 4) {
      this.#scoreBoard["matchFour"] += 1;
    }
    if (matchingNumberStack === 5) {
      this.checkIncludeBonus(index);
    }
    if (matchingNumberStack === 6) {
      this.#scoreBoard["matchSix"] += 1;
    }
  }

  checkIncludeBonus(index) {
    if (this.myLottoArray[index].includes(this.bonusNumber)) {
      this.#scoreBoard["matchFiveBonus"] += 1;
      return;
    }
    this.#scoreBoard["matchFive"] += 1;
    return;
  }

  makeLottoResult() {
    this.calculateProfit();
    this.printEachScore();
    this.calculateTotalProfitRate();
  }

  calculateProfit() {
    this.#profit =
      this.#scoreBoard["matchThree"] * LOTTO_INFO.FIFTH_PRIZE +
      this.#scoreBoard["matchFour"] * LOTTO_INFO.FOURTH_PRIZE +
      this.#scoreBoard["matchFive"] * LOTTO_INFO.THRID_PRIZE +
      this.#scoreBoard["matchFiveBonus"] * LOTTO_INFO.SECOND_PRIZE +
      this.#scoreBoard["matchSix"] * LOTTO_INFO.FIRST_PRIZE;
  }

  printEachScore() {
    Console.print(RESULT_MESSAGES.MATCH_THREE_RESULT(this.#scoreBoard["matchThree"]));
    Console.print(RESULT_MESSAGES.MATCH_FOUR_RESULT(this.#scoreBoard["matchFour"]));
    Console.print(RESULT_MESSAGES.MATCH_FIVE_RESULT(this.#scoreBoard["matchFive"]));
    Console.print(RESULT_MESSAGES.MATCH_FIVE_BONUS_RESULT(this.#scoreBoard["matchFiveBonus"]));
    Console.print(RESULT_MESSAGES.MATCH_SIX_RESULT(this.#scoreBoard["matchSix"]));
  }

  calculateTotalProfitRate() {
    if (this.#profit === 0) {
      this.#totalProfitRate = RESULT_MESSAGES.TOTAL_PROFIT_ZERO;
    }
    this.#totalProfitRate = RESULT_MESSAGES.TOTAL_PROFIT_RATE(this.#profit, this.payment);
  }

  announceScore() {
    Console.print(RESULT_MESSAGES.WINNING_STATISTICS);
    this.printEachScore();
    Console.print(this.#totalProfitRate);
  }
}

module.exports = Result;
