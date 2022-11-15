const { Random } = require("@woowacourse/mission-utils");

class Utils {
  static makeLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  static sortLottoNumberInAscendignOrder(lottoNumber) {
    return lottoNumber.sort((a, b) => a - b);
  }

  static getMatchedinWinningNumberCount(lotto, winningLotto) {
    return lotto.reduce((sum, number) => {
      winningLotto.includes(number) ? (sum += 1) : null;
      return sum;
    }, 0);
  }

  static hasBounsNumber(lotto, bounsNumber) {
    return lotto.includes(bounsNumber);
  }

  static getResultRanking(value) {
    if (value.ranking == "SECOND") {
      return `${
        value.mathcedCount
      }개 일치, 보너스 볼 일치 (${this.changeNumberWithCommas(
        "" + value.reward
      )}원) - ${value.amount}개`;
    }
    return `${value.mathcedCount}개 일치 (${this.changeNumberWithCommas(
      "" + value.reward
    )}원) - ${value.amount}개`;
  }

  static getTotalReward(rankingResult) {
    return rankingResult.reduce((sum, value) => {
      sum += value.reward * value.amount;
      return sum;
    }, 0);
  }

  static getEarningsRate(totalReward, lottoPayment) {
    return ((totalReward / lottoPayment) * 100).toFixed(1);
  }

  static changeNumberWithCommas(string) {
    return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

module.exports = Utils;
