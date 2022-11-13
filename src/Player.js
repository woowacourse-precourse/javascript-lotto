const Machine = require('./Machine');

class Player {
  constructor() {
    this.spentMoney = 0;
    this.lottos = [];
  }

  buyLottos(money) {
    const lottoCount = money / 1000;
    this.spentMoney = money;
    this.lottos = Array.from({ length: lottoCount }, () => Machine.publishLotto());
  }
}

module.exports = Player;
