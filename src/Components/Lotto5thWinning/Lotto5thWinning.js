const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto5thWinning extends AbstractLottoWinning {
  matchedNumberCount = 3;
  winningMoney = new Money(5_000);
  printer = new Printer();

  isSatisfied(lottoResult) {
    return this.matchedNumberCount === lottoResult.getMatchedNumberCount();
  }
}

module.exports = Lotto5thWinning;
