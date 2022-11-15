const AutoLottoMachine = require('../AutoLottoMachine/AutoLottoMachine');
const Money = require('../Money/Money');

class LottoSeller {
  lottoPrice = new Money(1000);
  lottoMachine = new AutoLottoMachine();

  sellLotto(money) {
    const purchasableCount = money.divide(this.lottoPrice);

    return Array.from({ length: purchasableCount }, this.lottoMachine.generateLotto);
  }
}

module.exports = LottoSeller;
