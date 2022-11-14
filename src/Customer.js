const MissionUtils = require('@woowacourse/mission-utils');

class Customer {
  #lottos = [];

  purchaseLotto(lotto) {
    this.setNewLotto(lotto);
  }

  setNewLotto(lotto) {
    this.#lottos = this.#lottos.concat(lotto);
  }

  list() {
    return this.#lottos;
  }

  printLottoPurchaseResult() {
    MissionUtils.Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((element, idx, array) => {
      MissionUtils.Console.print(
        `[${element.numbers[0]}, ${element.numbers[1]}, ${element.numbers[2]}, ${element.numbers[3]}, ${element.numbers[4]}, ${element.numbers[5]}]`
      );
    });
  }
}

module.exports = Customer;
