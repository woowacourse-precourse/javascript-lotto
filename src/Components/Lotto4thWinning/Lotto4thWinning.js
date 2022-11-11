const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto4thWinning extends AbstractLottoWinning {
  matchedNumberCount = 4;
  winningMoney = new Money(50_000);
  printer = new Printer();

  isSatisfied(lottoResult) {
    return this.matchedNumberCount === lottoResult.getMatchedNumberCount();
  }
}

module.exports = Lotto4thWinning;
