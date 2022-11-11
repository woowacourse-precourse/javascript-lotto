const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const Money = require('../Money/Money');
const PrinterWithBonusBall = require('../PrinterWithBonusBall/PrinterWithBonusBall');

class Lotto2ndWinning extends AbstractLottoWinning {
  matchedNumberCount = 5;
  winningMoney = new Money(30_000_000);
  printer = new PrinterWithBonusBall();

  isSatisfied(lottoResult) {
    return (
      this.matchedNumberCount === lottoResult.getMatchedNumberCount() &&
      lottoResult.isBonusNumberMatched()
    );
  }
}

module.exports = Lotto2ndWinning;
