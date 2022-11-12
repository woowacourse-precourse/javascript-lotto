const BuyLotto = require('./BuyLotto');

class App {
  lottoList;
  winning;
  bonus;

  constructor() {
    const buyLotto = new BuyLotto();
    this.lottoList = buyLotto.lottoList;
    this.winning = buyLotto.winning;
    this.bonus = buyLotto.bonus;
  }

  play() {}
}

module.exports = App;
