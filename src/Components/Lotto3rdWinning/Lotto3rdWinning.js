const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto3rdWinning extends AbstractLottoWinning {
  matchedNumberCount = 5;
  winningMoney = new Money(1_500_000);
  printer = new Printer();

  isSatisfied(lottoResult) {
    return (
      (this.matchedNumberCount === lottoResult.getMatchedNumberCount()) &
      !lottoResult.isBonusNumberMatched()
    );
  }
}

module.exports = Lotto3rdWinning;
