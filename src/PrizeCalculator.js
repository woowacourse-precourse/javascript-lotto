class PrizeCalculator {
  #getPurchaseAmount(lottos) {
    return lottos.length * 1000;
  }

  #getPrizeMoney(rank) {
    const prize = [2000000000, 30000000, 1500000, 50000, 5000];

    return rank.reduce((acc, currentRank, idx) => {
      return acc + currentRank * prize[idx];
    }, 0);
  }

  getRateOfReturn(lottos, rank) {
    const purchaseAmount = this.#getPurchaseAmount(lottos);
    const prizeMoney = this.#getPrizeMoney(rank);

    return Math.round((prizeMoney / purchaseAmount) * 1000) / 10;
  }
}

module.exports = PrizeCalculator;
