class Yield {
  static calculateYield(winPlace, purchaseAmount) {
    const prizes = [2000000000, 30000000, 1500000, 50000, 5000];
    let index = 0;
    let yield = 0;
    for (let key in winPlace) {
      yield += winPlace[key] * prizes[index];
      index += 1;
    }
    yield = (yield / purchaseAmount) * 100;
    return yield;
  }
}

module.exports = Yield;
