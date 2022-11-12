const Lotto = require('../Lotto');
const { pickUniqueNumbersInRange } = require('../utils/Utils');
const LottoGameView = require('../view/LottoGameView');

class LottoGameModel {
  constructor() {
    this.money;
    this.lottoCount;
    this.lottos = [];
  }

  buyLotto(money) {
    this.money = money;

    this.payMoney();
    this.generateLottos();
  }

  payMoney() {
    this.lottoCount = this.money / 1000;

    LottoGameView.printLottoCount(this.lottoCount);
  }

  generateLottos() {
    for (let i = 0; i < this.lottoCount; i++) {
      const lottoArr = pickUniqueNumbersInRange(1, 45, 6);

      this.lottos.push(new Lotto(lottoArr));
    }
  }
}

module.exports = LottoGameModel;
