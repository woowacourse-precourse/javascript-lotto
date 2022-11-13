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
    if (type === "first") this.ranks.first = newState;
    if (type === "second") this.ranks.second = newState;
    if (type === "third") this.ranks.third = newState;
    if (type === "fourth") this.ranks.fourth = newState;
    if (type === "fifth") this.ranks.fifth = newState;
  }
}

module.exports = Statistics;
