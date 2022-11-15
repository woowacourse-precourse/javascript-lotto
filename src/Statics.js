const { LOTTO_RANK } = require('./constants/lotto');

const Statics = class {
  getLottoWinningHistory({ lottoTickets, winningNumbers, bonus }) {
    const initWinningHistory = [...new Array(6)].fill(0);
    const winningHistory = lottoTickets.reduce((winningHistory, currTicket) => {
      const intersectionSize = currTicket.filter(number => winningNumbers.includes(number)).length;

      const currRank = this.getLottoRank({ intersectionSize, currTicket, bonus });
      winningHistory[currRank] += 1;

      return winningHistory;
    }, initWinningHistory);

    return winningHistory;
  }

  getLottoRank({ intersectionSize, currTicket, bonus }) {
    switch (intersectionSize) {
      case 6:
        return 1;

      case 5:
        const isBonus = currTicket.includes(bonus);
        const rank = isBonus === true ? 2 : 3;
        return rank;

      case 4:
        return 4;

      case 3:
        return 5;

      default:
        return;
    }
  }

  getLottoYield(lottoRevenue, budget) {
    const lottoYield = (lottoRevenue / budget) * 100;
    return lottoYield;
  }

  getLottoRevenue(winningHistory) {
    const { REWARD } = LOTTO_RANK;

    const lottoRevenue = winningHistory.reduce((lottoRevenue, rankCount, rank) => {
      const currRankReward = REWARD[rank] ?? 0;
      const currRankRevenue = rankCount * currRankReward;

      lottoRevenue += currRankRevenue;
      return lottoRevenue;
    }, 0);

    return lottoRevenue;
  }
};

module.exports = Statics;
