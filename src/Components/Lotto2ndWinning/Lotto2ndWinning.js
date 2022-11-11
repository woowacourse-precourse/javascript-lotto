const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const Money = require('../Money/Money');
const PrinterWithBonusBall = require('../PrinterWithBonusBall/PrinterWithBonusBall');

class Lotto2ndWinning extends AbstractLottoWinning {
  lottoNumberCount = new LottoNumberCount(5);
  bonusNumberCount = new LottoNumberCount(1);
  winningMoney = new Money(30_000_000);
  printer = new PrinterWithBonusBall();

  isSatisfied(lottoResult) {
    return lottoResult.isWinning(this.lottoNumberCount, this.bonusNumberCount);
  }
}

module.exports = Lotto2ndWinning;
