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
    this.#lottos.forEach((element) => {
      MissionUtils.Console.print(`[${element.numbers}]`);
    });
  }
}

module.exports = Customer;
