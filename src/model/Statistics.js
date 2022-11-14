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
    this.ranks[type] = newState;
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
}

module.exports = Statistics;
