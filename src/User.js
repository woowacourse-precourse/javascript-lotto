const config = require("./util/config")

class User {
  #fee = 0;
  #lottos = [];
  #lottoCount = 0;

  get fee() {
    return this.#fee;
  }

  set fee(fee) {
    this.#fee = fee;
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  set lottoCount(lottoCount) {
    this.#lottoCount = lottoCount;
  }

  calculateLottoCount() {
    this.#lottoCount = this.#fee / config.FEE_PER_GAME;
  }
}

module.exports = User;
