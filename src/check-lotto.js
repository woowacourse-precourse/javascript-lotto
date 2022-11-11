class CheckLotto {
  #controller;
  #result;

  constructor(controller) {
    this.#controller = controller;
  }

  getresult() {
    return this.#result;
  }

  checkLotto() {
    this.#result = this.#controller.lottos
      .map((lotto) => lotto.getNumber().map((number) => String(number)))
      .reduce((total, lotto) => {
        let count = 0;
        const winningNumber = this.#controller.winningNumber.getWinningNumber();
        winningNumber.forEach((number) => {
          if (lotto.includes(number)) {
            count += 1;
          }
        });
        if (count === 5 && this.#isSecond(lotto)) count += 0.5;
        if (count >= 3) this.#combineCount(total, count);
        return total;
      }, {});
  }

  #isSecond(lotto) {
    const bonusNumber = this.#controller.winningNumber.getBonusNumber();
    if (lotto.includes(bonusNumber)) {
      return true;
    }

    return false;
  }

  #combineCount(total, count) {
    if (!total[count]) {
      total[count] = 1;
      return;
    }
    total[count] += 1;
  }
}

module.exports = CheckLotto;
