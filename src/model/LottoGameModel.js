const Lotto = require('../Lotto');
const { pickUniqueNumbersInRange } = require('../utils/Utils');

class LottoGameModel {
  constructor(view) {
    this.money;
    this.lottoCount;
    this.lottos = [];
    this.lottoGameView = view;
  }

  buyLotto(money) {
    this.money = money;

    this.payMoney();
    this.generateLottos();
  }

  payMoney() {
    this.lottoCount = this.money / 1000;

    this.lottoGameView.printLottoCount(this.lottoCount);
  }

  generateLottos() {
    for (let i = 0; i < this.lottoCount; i++) {
      const lottoArr = pickUniqueNumbersInRange(1, 45, 6);

      this.lottos.push(new Lotto(lottoArr));
    }
  }
}

module.exports = LottoGameModel;
