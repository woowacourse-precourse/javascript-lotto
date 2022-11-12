class Yield {
  constructor() {
    this.yield = 0;
  }

  calculateYield(winPlace, purchaseAmount) {
    this.yield =
      ((winPlace.firstPlace * 2000000000 +
        winPlace.secondPlace * 30000000 +
        winPlace.thirdPlace * 1500000 +
        winPlace.fourthPlace * 50000 +
        winPlace.fifthPlace * 5000) /
        purchaseAmount) *
      100;
    return this.yield;
  }
}

module.exports = Yield;
