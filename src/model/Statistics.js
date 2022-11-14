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

  getRanks() {
    return this.ranks;
  }

  setRanks(type, newState) {
    if (typeof this.ranks[type] === "number") {
      this.ranks[type] = newState;
    }
  }

  getRateOfReturn() {
    return this.rateOfReturn;
  }

  setRateOfReturn(newRateOfReturn) {
    this.rateOfReturn = newRateOfReturn;
  }

  getCorrectNumberFromSingleLotto(winningNumber, singleLotto) {
    let correctCount = 0;

    for (const singleNumber of singleLotto) {
      if (winningNumber.includes(singleNumber)) correctCount += 1;
    }

    return correctCount;
  }

  getFinalRank(correctCount, singleLotto, bonusNumber) {
    if (correctCount === 6) return "first";
    if (correctCount === 5 && singleLotto.includes(bonusNumber)) return "second";
    if (correctCount === 5) return "third";
    if (correctCount === 4) return "fourth";
    if (correctCount === 3) return "fifth";

    return null;
  }

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

  getMoneyEarned() {
    const currentRanks = this.getRanks();
    let totalMoneyEarned = 0;

    totalMoneyEarned += 5000 * currentRanks.fifth;
    totalMoneyEarned += 50000 * currentRanks.fourth;
    totalMoneyEarned += 1500000 * currentRanks.third;
    totalMoneyEarned += 30000000 * currentRanks.second;
    totalMoneyEarned += 2000000000 * currentRanks.first;

    return totalMoneyEarned;
  }

  updateRateOfReturn(userPurchasingAmount) {
    const totalMoneyEarned = this.getMoneyEarned();

    this.setRateOfReturn(
      ((totalMoneyEarned / userPurchasingAmount) * 100).toFixed(1),
    );
  }

  getStatistics() {
    const information = this.controller.getOverallInformationForStatistics();
    this.updateRanks(information);
    this.updateRateOfReturn(information.purchasingAmount);
    this.controller.printStatistics(this.getRanks(), this.getRateOfReturn());
  }
}

module.exports = Statistics;
