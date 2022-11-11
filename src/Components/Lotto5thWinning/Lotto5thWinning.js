const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto5thWinning extends AbstractLottoWinning {
  lottoNumberCount = new LottoNumberCount(3);
  winningMoney = new Money(5_000);
  printer = new Printer();

  isSatisfied(lottoResult) {
    return lottoResult.isWinning(this.lottoNumberCount);
  }
}

module.exports = Lotto5thWinning;
