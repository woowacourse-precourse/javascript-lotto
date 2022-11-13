class Customer {
  #lottos = [];

  purchaseLotto(lotto) {
    this.setNewLotto(lotto);
  }

  list() {
    return this.#lottos;
  }

  setNewLotto(lotto) {
    this.#lottos = this.#lottos.concat(lotto);
  }

  printLottoPurchaseResult() {
    MissionUtils.Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((element) => {
      MissionUtils.Console.print(`[${element.numbers}]`);
    });
  }
}

module.exports = Customer;
