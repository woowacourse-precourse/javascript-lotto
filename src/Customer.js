const MissionUtils = require('@woowacourse/mission-utils');

class Customer {
  #lottos = [];

  purchaseLotto(lotto) {
    this.addNewLotto(lotto);
  }

  addNewLotto(lotto) {
    this.#lottos = this.#lottos.concat(lotto);
  }

  list() {
    return this.#lottos;
  }


}

module.exports = Customer;
