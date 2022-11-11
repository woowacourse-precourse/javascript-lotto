class CheckLotto {
  #controller;
  #result;

  constructor(controller) {
    this.#controller = controller;
  }

  getWinningresult() {
    const sortedResult = Object.entries(this.#result).sort(([a], [b]) => (a < b ? -1 : 1));
    const winningResult = [];
    sortedResult.forEach((result) => {
      winningResult.push(result[1]);
    });
    return winningResult;
  }

  checkLotto() {
    this.#result = this.#controller.lottos
      .map((lotto) => lotto.getNumber().map((number) => String(number)))
      .reduce(
        (total, lotto) => {
          let count = 0;
          const winningNumber = this.#controller.winningNumber.getWinningNumber();
          winningNumber.forEach((number) => {
            if (lotto.includes(number)) {
              count += 1;
            }
          });
          if (count === 5 && this.#isSecond(lotto)) count += 0.5;
          if (count >= 3) total[count] += 1;
          return total;
        },
        { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 },
      );
  }

  #isSecond(lotto) {
    const bonusNumber = this.#controller.winningNumber.getBonusNumber();
    if (lotto.includes(bonusNumber)) {
      return true;
    }

    return false;
  }
}

module.exports = CheckLotto;
