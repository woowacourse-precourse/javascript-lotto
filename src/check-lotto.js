const { RANGKING_COUNT } = require('./utils/constant');

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
    const calledlottoNumbers = this.#controller.lottos.map((lotto) =>
      lotto.getNumber().map((number) => String(number)),
    );

    this.#result = this.#countingWinLottos(calledlottoNumbers);
  }

  #countingWinLottos(lottos) {
    return lottos.reduce(
      (total, lotto) => {
        let count = 0;

        this.#controller.winningNumber.getWinningNumber().forEach((number) => {
          if (lotto.includes(number)) count += 1;
        });

        if (count === RANGKING_COUNT.THIRD_RANKING_COUNT && this.#isSecond(lotto)) count += 0.5;

        if (count >= RANGKING_COUNT.FIFTH_RANKING_COUNT) total[count] += 1;

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
