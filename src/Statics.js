const {
  BUDGET_MESSAGE,
  TICKET_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  TICKET_NUMBER,
  BONUS_MESSAGE,
  LOTTO_RANK,
  STATIC_MESSAGE,
} = require('./constants/lotto');

const Statics = class {
  getLottoWinningHistory({ lottoTickets, winningNumbers, bonus }) {
    const initWinningHistory = [...new Array(6)].fill(0);
    const winningHistory = lottoTickets.reduce((winningHistory, currTicket) => {
      const intersectionSize = currTicket.filter(number => winningNumbers.includes(number)).length;

      switch (intersectionSize) {
        case 6:
          winningHistory[1] += 1;
          return winningHistory;

        case 5:
          const isBonus = currTicket.includes(bonus);
          const rank = isBonus === true ? 2 : 3;
          winningHistory[rank] += 1;
          return winningHistory;

        case 4:
          winningHistory[4] += 1;
          return winningHistory;

        case 3:
          winningHistory[5] += 1;
          return winningHistory;

        default:
          return winningHistory;
      }
    }, initWinningHistory);

    return winningHistory;
  }

  getLottoRank() {}

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
