const { BONUS_NUMBER } = require('./constant');

class Statistics {
  constructor(lottoNumber, buyLottery) {
    [this.lottoNumber, this.bonusLottoNumber] = lottoNumber;
    this.buyLottery = buyLottery;
  }

  showResult() {
    const matchList = this.buyLottery.map((lottery) => {
      const countNumber = this.compareNumbers(this.lottoNumber, lottery);
      const bonusMatch =
        countNumber === BONUS_NUMBER
          ? this.compareBonusNumber(this.bonusLottoNumber, lottery)
          : false;
      return [countNumber, bonusMatch];
    });
    return this.matchWinInfo(matchList);
  }

  matchWinInfo(matchList) {
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
