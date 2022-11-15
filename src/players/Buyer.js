const STANDARD_EARNING = require('../utils/winningPrice');
const Validator = require('../Validator');

class Buyer {
  constructor() {
    this.money;
    this.lottoList;
  }

  setMoney(money) {
    this.validate(money);
    this.money = money;
  }

  validate(money) {
    Validator.checkThousands(money);
  }

  getLottoList(lottoList) {
    this.lottoList = lottoList;
  }

  showLottoList() {
    this.lottoList.forEach((lotto) => {
      lotto.print();
    });
  }

  getLottoResultMap(winningNumbers, bonusNumber) {
    const matchList = this.getLottoMatchList(winningNumbers, bonusNumber);
    return this.getMatchCount(matchList);
  }

  getMatchCount(matchList) {
    const matchCountMap = this.lottoResultMapTemplate();
    return this.setEarningRate(this.setGrades(matchCountMap, matchList), matchList);
  }

  setGrades(matchCountMap, matchList) {
    matchList.forEach((match) => {
      matchCountMap[match] += 1;
    });
    return matchCountMap;
  }

  setEarningRate(matchCountMap, matchList) {
    const sum = matchList.reduce((acc, cur) => acc + STANDARD_EARNING[cur], 0);
    matchCountMap.earningRate = this.sliceEarningRate(((sum / this.money) * 100).toFixed(2));
    return matchCountMap;
  }

  sliceEarningRate(earningRate) {
    if (earningRate.slice(-2) === '00') {
      return earningRate.slice(0, -3);
    }

    if (earningRate.slice(-1) === '0') {
      return earningRate.slice(0, -1);
    }

    return earningRate;
  }

  getLottoMatchList(winningNumbers, bonusNumber) {
    return this.lottoList
      .map((lotto) => lotto.getMatchDivision(winningNumbers, bonusNumber))
      .filter((match) => match !== 'none');
  }

  getEarningRate() {
    STANDARD_EARNING;
  }

  lottoResultMapTemplate() {
    return {
      first: 0,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0,
      earningRate: 0,
    };
  }
}

module.exports = Buyer;
