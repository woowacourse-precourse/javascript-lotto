const { lottoNumber } = require('./LottoNumber');
const { BONUS_CHECK, BONUS_COUNT } = require('./Constants');

class WinningCount {
  constructor() {
    this.lottoNumber = lottoNumber.createLottoNumber();
  }

  setMatchCount(winningNumber, bonusNumber) {
    const winningMatchCount = this.getWinningMatchCount(winningNumber);
    const bonusMatchCount = this.getBonusMatchCount(bonusNumber);
    const totalLottoCount =
      winningMatchCount === BONUS_CHECK
        ? winningMatchCount + bonusMatchCount
        : winningMatchCount;
    return totalLottoCount;
  }

  getWinningMatchCount(winningNumber) {
    return this.lottoNumber.reduce(
      (acc, num) => acc + Number(winningNumber.includes(num)),
      0
    );
  }

  getBonusMatchCount(bonusNumber) {
    return this.lottoNumber.includes(bonusNumber) ? BONUS_COUNT : 0;
  }
}

const winningCount = new WinningCount();
exports.winningCount = winningCount;
