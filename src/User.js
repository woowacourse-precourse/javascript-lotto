const util = require('./util/util');

class User {
  constructor() {
    this.amount = 0;
    this.lottos = [];
    this.lottoCount = 0;
  }

  calculateLottoCount() {
    this.lottoCount = this.amount / util.AMOUNT_PER_GAME;
  }
}

module.exports = User;
