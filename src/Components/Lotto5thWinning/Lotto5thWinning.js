const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto5thWinning extends AbstractLottoWinning {
  lottoNumberCount = new LottoNumberCount(3);
  bonusNumberCount = new LottoNumberCount(null);
  winningMoney = new Money(5_000);
  printer = new Printer();
}

module.exports = Lotto5thWinning;
