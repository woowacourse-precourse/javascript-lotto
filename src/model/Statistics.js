const generalConstants = require("../constants/generalConstants");

class Statistics {
  constructor(controller) {
    this.controller = controller;
    this.ranks = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.rateOfReturn = 0;
  }

  /**
   * 등수 통계를 반환하는 getter 메서드
   * @return {{third: number, fifth: number, fourth: number, first: number, second: number}} [등수 통계]
   */
  getRanks() {
    return this.ranks;
  }

  /**
   * 등수 통계를 변경하는 setter 메서드
   * @param type {string} [등수]
   * @param newState {number} [새로운 값]
   */
  setRanks(type, newState) {
    if (typeof this.ranks[type] === "number") {
      this.ranks[type] = newState;
    }
  }

  /**
   * 수익률을 반환하는 getter 메서드
   * @return {number} [수익률]
   */
  getRateOfReturn() {
    return this.rateOfReturn;
  }

  /**
   * 수익률을 변경하는 setter 메서드
   * @param newRateOfReturn {number} [변경할 수익률 값]
   */
  setRateOfReturn(newRateOfReturn) {
    this.rateOfReturn = newRateOfReturn;
  }

  /**
   * 번호 일치 개수를 반환하는 메서드
   * @param winningNumber {number[]} [당첨 번호]
   * @param singleLotto {number[]} [발행된 하나의 로또]
   * @return {number} [일치 개수]
   */
  getCorrectNumberFromSingleLotto(winningNumber, singleLotto) {
    let correctCount = 0;

    for (const singleNumber of singleLotto) {
      if (winningNumber.includes(singleNumber)) correctCount += 1;
    }

    return correctCount;
  }

  /**
   * 일치 개수에 따라 등수를 반환하는 메서드
   * @param correctCount {number} [일치 개수]
   * @param singleLotto {number[]} [발행된 하나의 로또]
   * @param bonusNumber {number} [보너스 번호]
   * @return {string|null} [등수 혹은 3등 이하]
   */
  getFinalRank(correctCount, singleLotto, bonusNumber) {
    if (correctCount === 6) return "first";
    if (correctCount === 5 && singleLotto.includes(bonusNumber)) return "second";
    if (correctCount === 5) return "third";
    if (correctCount === 4) return "fourth";
    if (correctCount === 3) return "fifth";

    return null;
  }

  /**
   * 통계를 위해 등수를 판단하여 적용하는 메서드
   * @param winningNumber {number[]} [당첨 번호]
   * @param bonusNumber {number} [보너스 번호]
   * @param userIssuedLotto {number[][]} [유저에게 발행된 로또]
   */
  updateRanks({ winningNumber, bonusNumber, userIssuedLotto }) {
    for (const singleLotto of userIssuedLotto) {
      const correctCount = this.getCorrectNumberFromSingleLotto(
        winningNumber,
        singleLotto,
      );
      const resultRank = this.getFinalRank(
        correctCount,
        singleLotto,
        bonusNumber,
      );

      this.setRanks(resultRank, this.ranks[resultRank] + 1);
    }
  }

  /**
   * 등수에 따라 번 돈을 반환하는 메서드
   * @return {number} [총 수익으로 얻은 액수]
   */
  getMoneyEarned() {
    const currentRanks = this.ranks;
    let totalMoneyEarned = 0;

    totalMoneyEarned += generalConstants.FIFTH_PRIZE * currentRanks.fifth;
    totalMoneyEarned += generalConstants.FOURTH_PRIZE * currentRanks.fourth;
    totalMoneyEarned += generalConstants.THIRD_PRIZE * currentRanks.third;
    totalMoneyEarned += generalConstants.SECOND_PRIZE * currentRanks.second;
    totalMoneyEarned += generalConstants.FIRST_PRIZE * currentRanks.first;

    return totalMoneyEarned;
  }

  /**
   * 수익률을 판단하여 적용하는 메서드
   * @param userPurchasingAmount {number} [유저 구입 금액]
   * @param totalMoneyEarned {number} [총 수익 금액]
   */
  updateRateOfReturn(userPurchasingAmount, totalMoneyEarned) {
    this.setRateOfReturn(
      +((totalMoneyEarned / userPurchasingAmount) * 100).toFixed(1),
    );
  }

  // 통계 도출 메서드
  getStatistics() {
    const information = this.controller.getOverallInformationForStatistics();
    this.updateRanks(information);
    this.updateRateOfReturn(
      information.purchasingAmount,
      this.getMoneyEarned(),
    );
    this.controller.printStatistics(this.ranks, this.rateOfReturn);
  }
}

module.exports = Statistics;
