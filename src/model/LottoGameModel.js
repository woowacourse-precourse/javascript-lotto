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
    this.printLottos(this.lottos);
  }

  payMoney() {
    this.lottoCount = this.money / 1000;

    LottoGameView.printLottoCount(this.lottoCount);

    this.lottos = this.generateLottos();
  }

  generateLottos() {
    const result = [];

    for (let i = 0; i < this.lottoCount; i++) {
      const lottoArr = pickUniqueNumbersInRange(1, 45, 6);

      new Lotto(lottoArr);
      result.push(lottoArr);
    }

    return result;
  }

  printLottos(lottos) {
    LottoGameView.printLottoNumbers(lottos);
  }
}

module.exports = LottoGameModel;
