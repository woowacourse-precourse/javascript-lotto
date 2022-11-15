const config = require("./util/config");

class User {
  constructor() {
    this.fee = 0;
    this.lottos = [];
    this.lottoCount = 0;
  }

  calculateLottoCount() {
    this.lottoCount = this.fee / config.FEE_PER_GAME;
  }
}

module.exports = User;
