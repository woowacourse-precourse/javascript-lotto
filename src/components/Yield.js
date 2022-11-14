class Yield {
  static calculateYield(winPlace, purchaseAmount) {
    const yield =
      ((winPlace.firstPlace * 2000000000 +
        winPlace.secondPlace * 30000000 +
        winPlace.thirdPlace * 1500000 +
        winPlace.fourthPlace * 50000 +
        winPlace.fifthPlace * 5000) /
        purchaseAmount) *
      100;
    return yield;
  }
}

module.exports = Yield;
