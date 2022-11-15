const {
  LOTTO_RANKINGS,
  LOTTO_PRIZES,
  LOTTO_RESULT_MESSAGES,
  LOTTO_BASE,
} = require('./constants');

class User {
  #lottoGame;

  #lottoTickets;

  constructor(lottoGame) {
    this.#lottoGame = lottoGame;
  }

  setLottoTickets(lottoTickets) {
    this.#lottoTickets = lottoTickets;
  }

  createStatisticsText() {
    const winningMap = this.#lottoGame.computeWinningMap(this.#lottoTickets);
    return [
      ...User.createWinningResultText(winningMap),
      this.createReturnRateText(winningMap),
    ];
  }

  static createWinningResultText(winningMap) {
    return Object.values(LOTTO_RANKINGS).map(rank => {
      const count = winningMap[rank] ?? 0;
      const prize = Number(LOTTO_PRIZES[rank]).toLocaleString();
      return `${LOTTO_RESULT_MESSAGES[rank]} (${prize}원) - ${count}개`;
    });
  }

  createReturnRateText(winningMap) {
    const purchaseAmount = this.#lottoTickets.length * LOTTO_BASE.PRICE;
    const totalPrize = User.computeTotalPrize(winningMap);
    const returnRate = User.computeReturnRate(totalPrize, purchaseAmount);
    return `총 수익률은 ${returnRate}%입니다.`;
  }

  static computeTotalPrize(winningMap) {
    return Object.entries(winningMap).reduce((acc, [rank, count]) => {
      acc += LOTTO_PRIZES[rank] * count;
      return acc;
    }, 0);
  }

  static computeReturnRate(totalPrize, purchaseAmount) {
    return Number((totalPrize / purchaseAmount) * 100).toFixed(1);
  }
}

module.exports = User;
