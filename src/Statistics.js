const { BONUS_NUMBER, RANKING } = require('./constant');

class Statistics {
  constructor(lottoNumber, buyLottery) {
    [this.lottoNumber, this.bonusLottoNumber] = lottoNumber;
    this.buyLottery = buyLottery;
  }

  showResult() {
    const result = this.matchInfo();
    return Object.keys(RANKING).map((rank) => {
      const matchNumberInfo = RANKING[rank];
      const matchNumber = RANKING[rank]['MATCH'];
      const matchCount =
        result[matchNumber] && result[matchNumber]['bonus'] === matchNumberInfo['BONUS']
          ? result[matchNumber]['count']
          : 0;
      return { matchCount, matchMoney: matchNumberInfo['JACKPOT'], matchNumberInfo };
    });
  }

  matchInfo() {
    const matchList = this.buyLottery.map((lottery) => {
      const countNumber = this.compareNumbers(this.lottoNumber, lottery);
      const bonusMatch =
        countNumber === BONUS_NUMBER
          ? this.compareBonusNumber(this.bonusLottoNumber, lottery)
          : false;
      return [countNumber, bonusMatch];
    });
    return matchList.reduce((matchAcc, [match, bonus]) => {
      matchAcc[match] = { bonus, count: (matchAcc[match] ? matchAcc[match]['count'] : 0) + 1 };
      return matchAcc;
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
