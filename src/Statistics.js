const { BONUS_NUMBER, RANKING } = require('./constant');

class Statistics {
  constructor(fullLottoNumbers, lotteryTickets) {
    [this.lottoNumbers, this.bonusNumber] = fullLottoNumbers;
    this.lotteryTickets = lotteryTickets;
  }

  showMatchResult() {
    const matchInfoList = this.matchInfo();
    return Object.keys(RANKING).map((rank) => {
      const rankInfo = RANKING[rank];
      const rankMatch = RANKING[rank]['MATCH'];
      const matchCount =
        matchInfoList[rankMatch] && matchInfoList[rankMatch]['bonus'] === rankInfo['BONUS']
          ? matchInfoList[rankMatch]['count']
          : 0;
      return { matchCount, matchMoney: rankInfo['JACKPOT'], rankMessage: rankInfo['MESSAGE'] };
    });
  }

  matchInfo() {
    const matchList = this.lotteryTickets.map((lottery) => {
      const matchNumber = this.compareNumbers(this.lottoNumbers, lottery);
      const bonusMatch =
        matchNumber === BONUS_NUMBER ? this.compareBonusNumber(this.bonusNumber, lottery) : false;
      return [matchNumber, bonusMatch];
    });
    return matchList.reduce((matchSum, [match, bonus]) => {
      matchSum[match] = { bonus, count: (matchSum[match] ? matchSum[match]['count'] : 0) + 1 };
      return matchSum;
    }, {});
  }

  compareNumbers(answer, quest) {
    return answer.filter((number) => quest.includes(Number(number))).length;
  }

  compareBonusNumber(answer, quest) {
    return quest.includes(Number(answer)) ? true : false;
  }
}

module.exports = Statistics;
