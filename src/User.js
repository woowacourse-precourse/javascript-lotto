const { lottoGenerator } = require('./Lotto.js');
const { print, reducer } = require('./Funcs.js');
const Lotto = require('./Lotto.js');

class User {
  constructor() {
    this.money = 0;
    this.quentity = 0;
    this.lottos = [];
  }
  purchaseLotto(payment) {
    this.money = Number(payment);
    this.quentity = parseInt(payment / 1000);
  }
  myLottos() {
    let count = this.quentity;
    while (count > 0) {
      const lotto = lottoGenerator();
      this.lottos.push(lotto);
      count--;
    }
  }
}

module.exports = User;
