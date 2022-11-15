const AbstractLottoWinning = require('../AbstractLottoWinning/AbstractLottoWinning');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const Money = require('../Money/Money');
const Printer = require('../Printer/Printer');

class Lotto1stWinning extends AbstractLottoWinning {
  lottoNumberCount = new LottoNumberCount(6);
  bonusNumberCount = new LottoNumberCount(null);
  winningMoney = new Money(2_000_000_000);
  printer = new Printer();
}

module.exports = Lotto1stWinning;
