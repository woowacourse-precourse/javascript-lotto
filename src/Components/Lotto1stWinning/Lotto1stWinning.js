const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto1stWinning extends AbstractLottoWinning {
  lottoNumberCount = new LottoNumberCount(6);
  winningMoney = new Money(2_000_000_000);
  printer = new Printer();

  isSatisfied(lottoResult) {
    return lottoResult.isWinning(this.lottoNumberCount);
  }
}

module.exports = Lotto1stWinning;
