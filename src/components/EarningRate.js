class EarningRate {
  static getEarningRate(winPlace, purchaseAmount) {
    const prizes = [2000000000, 30000000, 1500000, 50000, 5000];
    let earningRate = 0;
    let index = 0;
    for (let key in winPlace) {
      earningRate += winPlace[key] * prizes[index];
      index += 1;
    }
    earningRate = (earningRate / purchaseAmount) * 100;
    return earningRate;
  }
}

module.exports = EarningRate;
