const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto4thWinning extends AbstractLottoWinning {
  lottoNumberCount = new LottoNumberCount(4);
  winningMoney = new Money(50_000);
  printer = new Printer();

  isSatisfied(lottoResult) {
    return lottoResult.isWinning(this.lottoNumberCount);
  }
}

module.exports = Lotto4thWinning;
