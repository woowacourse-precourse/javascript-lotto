const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto1stWinning extends AbstractLottoWinning {
  matchedNumberCount = 6;
  winningMoney = new Money(2_000_000_000);
  printer = new Printer();

  isSatisfied(lottoResult) {
    return this.matchedNumberCount === lottoResult.getMatchedNumberCount();
  }
}

module.exports = Lotto1stWinning;
