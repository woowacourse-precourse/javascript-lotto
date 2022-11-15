const {
  RANKING_FROM_MATCH_COUNT,
  RANK_ACCORDING_REWARD,
  NUMBER_TYPE,
  RANKING,
  LOTTO_INFO,
  MATH_INFO,
} = require("../constants/Value");

class Calculator {
  #myNumbers;
  #winningNumber;
  #prizeStatus = {};
  #earningMoney = MATH_INFO.INT_ZERO;

  getWinningResult(myNumbers, winningNumber) {
    this.#initPrizeStatus();
    this.#setNumbers(myNumbers, winningNumber);
    this.#compareWinningNumberToMine();
    return this.#prizeStatus;
  }

  getEarningRate(winningStatus, moneyInput) {
    this.#getEarnedMoney(winningStatus);
    return this.#getEarnedPercenage(moneyInput);
  }

  #getRankAccordingMatchCount(myLottoNumber) {
    const matchCount = this.#getMatchCount(myLottoNumber);
    if (this.#isSecondPlace(matchCount, myLottoNumber)) {
      this.#prizeStatus[RANKING.SECOND_PLACE] += 1;
      return;
    }
    return matchCount;
  }

  #initPrizeStatus() {
    [...Array(LOTTO_INFO.LEAST_PLACE).keys()]
      .map((key) => key + 1)
      .forEach((index) => (this.#prizeStatus[index] = MATH_INFO.INT_ZERO));
  }

  #getMatchCount(myLotto) {
    return myLotto.filter((number) =>
      this.#winningNumber[NUMBER_TYPE.WINNING_NUMBER].includes(number)
    ).length;
  }

  #isSecondPlace(matchCount, myLotto) {
    return (
      matchCount === LOTTO_INFO.SECOND_PLACE_OR_THIRD_PLACE &&
      myLotto.includes(this.#winningNumber[NUMBER_TYPE.BONUS_NUMBER])
    );
  }

  #compareWinningNumberToMine() {
    let matchCountFromEachLotto;
    Array.from(this.#myNumbers).forEach((myNumber) => {
      matchCountFromEachLotto = this.#getRankAccordingMatchCount(myNumber);
      if (this.#isRanked(matchCountFromEachLotto)) {
        this.#prizeStatus[
          RANKING_FROM_MATCH_COUNT[matchCountFromEachLotto]
        ] += 1;
      }
    });
  }

  #isRanked(myRank) {
    return myRank && myRank >= LOTTO_INFO.LEAST_REWARD_POSSIBLE_MATCH_COUNT;
  }

  #setNumbers(myNumbers, winningNumber) {
    this.#myNumbers = myNumbers;
    this.#winningNumber = winningNumber;
  }

  #getEarnedMoney(winningStatus) {
    Object.keys(winningStatus).forEach((key) => {
      this.#earningMoney += winningStatus[key] * RANK_ACCORDING_REWARD[key];
    });
  }

  #getEarnedPercenage(moneyInput) {
    this.#earningMoney /= moneyInput;
    this.#earningMoney = this.#makePercent();

    return this.#getTwoDecimalDown();
  }

  #getTwoDecimalDown() {
    return this.#earningMoney.toFixed(MATH_INFO.DIGIT_FOR_ROUND);
  }

  #makePercent() {
    return this.#earningMoney * MATH_INFO.DECIMAL_TO_PERCENTAGE_NUMBER;
  }
}

module.exports = Calculator;
