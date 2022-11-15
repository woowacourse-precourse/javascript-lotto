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
}

module.exports = User;
