const util = require('./util/util');

class User {
  #amount = 0;
  #lottos = [];
  #lottoCount = 0;

  get amount() {
    return this.#amount;
  }
  set amount(amount) {
    this.#amount = amount;
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  set lottoCount(lottoCount) {
    this.#lottoCount = lottoCount;
  }
}

module.exports = User;
