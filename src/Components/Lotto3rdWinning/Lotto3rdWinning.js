const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto3rdWinning extends AbstractLottoWinning {
  lottoNumberCount = new LottoNumberCount(5);
  bonusNumberCount = new LottoNumberCount(0);
  winningMoney = new Money(1_500_000);
  printer = new Printer();
}

module.exports = Lotto3rdWinning;
