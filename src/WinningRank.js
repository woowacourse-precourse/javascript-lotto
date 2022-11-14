const { BONUS_CHECK, BONUS_COUNT } = require('./Constants');

class WinningRank {
  getWinningMatchCount(lottoTicket, winningList) {
    return lottoTicket.reduce(
      (acc, num) => acc + Number(winningList.includes(num)),
      0
    );
  }

  getBonusMatchCount(lottoTicket, bonusNumber) {
    return lottoTicket.includes(bonusNumber) ? BONUS_COUNT : 0;
  }

  calculateLottoRank(lottoTicket, winningList, bonusNumber) {
    const winningMatchCount = this.getWinningMatchCount(
      lottoTicket,
      winningList
    );
    const bonusMatchCount = this.getBonusMatchCount(lottoTicket, bonusNumber);

    const totalLottoCount =
      winningMatchCount === BONUS_CHECK
        ? winningMatchCount + bonusMatchCount
        : winningMatchCount;
    return (this.totalLottoCount = totalLottoCount);
  }

  getMatchLotto(lottoTickets, winningList, bonusNumber) {
    const countMatch = [];

    lottoTickets.forEach((lottoTicket) => {
      this.matchNumber = this.calculateLottoRank(
        lottoTicket,
        winningList,
        bonusNumber
      );
      countMatch.push(this.matchNumber);
    });

    this.countMatch = countMatch;
  }

  getCountRank() {
    const countRank = [0, 0, 0, 0, 0];

    for (let i = 0; i < this.countMatch.length; i++) {
      if (this.countMatch[i] === 3) countRank[4] += 1;
      if (this.countMatch[i] === 4) countRank[3] += 1;
      if (this.countMatch[i] === 5) countRank[2] += 1;
      if (this.countMatch[i] === 5.5) countRank[1] += 1;
      if (this.countMatch[i] === 6) countRank[0] += 1;
    }
    return countRank;
  }
}

module.exports = WinningRank;
