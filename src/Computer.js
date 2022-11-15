const Lotto = require("./Lotto");
const { getNumberIntersection } = require("./utils/utils");
const { winningRanking } = require("./utils/data");
const Validate = require("./Validate");

class Computer {
  winningNumbers;
  bonusNumber;
  winningRanking;

  constructor(winningNumbers) {
    this.winningNumbers = new Lotto(
      this.changeWinningNumbers(winningNumbers)
    ).getNumber();
    this.winningRanking = winningRanking;
  }

  setBonusNumber(bonusNumber) {
    Validate.isBonusNumberRange(bonusNumber);
    Validate.isUniqueBonusNumber(Number(bonusNumber), this.winningNumbers);
    this.bonusNumber = Number(bonusNumber);
  }

  changeWinningNumbers(winningNumbers) {
    return winningNumbers.split(",").map((number) => Number(number));
  }

  getMatchs(totalUserLottoNumbers) {
    totalUserLottoNumbers.forEach((userLottoNumbers) => {
      const winningNumberMatch = getNumberIntersection(
        this.winningNumbers,
        userLottoNumbers
      ).length;
      const minimumWinningNumbersMatch =
        this.winningRanking[0].winningNumberMatch;
      if (winningNumberMatch < minimumWinningNumbersMatch) {
        return;
      }
      const isBonusNumberMatch = userLottoNumbers.includes(this.bonusNumber);
      this.getCount({ winningNumberMatch, isBonusNumberMatch });
    });
  }

  getCount({ winningNumberMatch, isBonusNumberMatch }) {
    const rankingIndex = this.winningRanking.findIndex(
      (win) =>
        win.winningNumberMatch === winningNumberMatch &&
        win.isBonusNumberMatch === isBonusNumberMatch
    );
    this.winningRanking[rankingIndex].count += 1;
  }

  getTotalRevenue() {
    return this.winningRanking.reduce((totalRevenue, ranking) => {
      return totalRevenue + ranking.prizeMoney * ranking.count;
    }, 0);
  }
}

module.exports = Computer;
