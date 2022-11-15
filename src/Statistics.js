const { BONUS_NUMBER, RANKING } = require('./constant');

class Statistics {
  constructor(fullLottoNumbers, lotteryTickets) {
    [this.lottoNumbers, this.bonusNumber] = fullLottoNumbers;
    this.lotteryTickets = lotteryTickets;
  }

  showMatchResult() {
    const matchInfoList = this.matchInfoCount();
    return Object.keys(RANKING).map((rank) => {
      const rankInfo = RANKING[rank];
      const name = `match${rankInfo['MATCH']}${rankInfo['BONUS']}`;
      const matchCount = matchInfoList[name] ? matchInfoList[name]['count'] : 0;
      return { matchCount, matchMoney: rankInfo['JACKPOT'], rankMessage: rankInfo['MESSAGE'] };
    });
  }

  matchInfoCount() {
    return this.matchInfo().reduce((matchSum, [match, bonus]) => {
      const name = `match${match}${bonus}`;
      matchSum[name] = { bonus, count: (matchSum[name] ? matchSum[name]['count'] : 0) + 1 };
      return matchSum;
    }, {});
  }

  matchInfo() {
    return this.lotteryTickets.map((lottery) => {
      const matchNumber = this.compareNumbers(this.lottoNumbers, lottery);
      const bonusMatch =
        matchNumber === BONUS_NUMBER ? this.compareBonusNumber(this.bonusNumber, lottery) : false;
      return [matchNumber, bonusMatch];
    });
  }

  compareNumbers(answer, quest) {
    return answer.filter((number) => quest.includes(Number(number))).length;
  }

  compareBonusNumber(answer, quest) {
    return quest.includes(Number(answer)) ? true : false;
  }
}

module.exports = Statistics;
