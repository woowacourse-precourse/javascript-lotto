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

  printLottoPurchaseResult() {
    MissionUtils.Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((element) => {
      MissionUtils.Console.print(`[${element.numbers.join(', ')}]`);
    });
  }
}

module.exports = Customer;
