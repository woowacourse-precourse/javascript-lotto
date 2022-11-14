const { LOTTO_AMOUNT, VARIABLE_FACTORY } = require('../../utils/constants');

class LottoAdjustment {
  #lotto;

  #bonus;

  #payment;

  #scoreBoard;

  #income;

  constructor(inputs) {
    this.#lotto = inputs.getInstance(VARIABLE_FACTORY.lotto);
    this.#bonus = inputs.getInstance(VARIABLE_FACTORY.bonus);
    this.#payment = inputs.getInstance(VARIABLE_FACTORY.lottoStore);

    this.#scoreBoard = [0, 0, 0, 0, 0];
    this.#income = '';

    this.#compareLotto();
    this.#calculateIncome();
  }

  getLottoCountScore() {
    return this.#scoreBoard;
  }

  getIncome() {
    return this.#income;
  }

  #roundUpFor() {
    this.#income = Math.round(
      (LOTTO_AMOUNT.reduce((acc, moneyUnit, index) => {
        return acc + moneyUnit * this.#scoreBoard[index];
      }, 0) /
        this.#payment.getMoney()) *
        1000,
    );

    return this;
  }

  #makeDecimalFirst() {
    if (this.#income === 0) {
      this.#income = '0.0';
      return this;
    }

    this.#income = String(this.#income).split('');
    this.#income.splice(this.#income.length - 1, 0, '.');
    this.#income = this.#income.join('');

    return this;
  }

  #calculateIncome() {
    this.#roundUpFor().#makeDecimalFirst();
  }

  #matchLottoFor(lottoToBuy) {
    return lottoToBuy.filter(lottoNumber =>
      this.#lotto.getNumber().includes(lottoNumber),
    ).length;
  }

  #matchBonusFor(lottoToBuy) {
    return lottoToBuy.includes(this.#bonus.getNumber());
  }

  #setScoreToMatch([lottoCount, bonusCount]) {
    switch (true) {
      case lottoCount === 6:
        this.#scoreBoard[this.#scoreBoard.length - 1] += 1;
        break;
      case lottoCount === 5 && bonusCount:
        this.#scoreBoard[this.#scoreBoard.length - 2] += 1;
        break;
      case lottoCount >= 3 && lottoCount <= 5:
        this.#scoreBoard[lottoCount - 3] += 1;
        break;
      default:
        break;
    }
  }

  #compareLotto() {
    [...this.#payment.getLottos()]
      .map(lottoToBuy => [
        this.#matchLottoFor(lottoToBuy),
        this.#matchBonusFor(lottoToBuy),
      ])
      .forEach(([lottoCount, bonusCount]) => {
        this.#setScoreToMatch([lottoCount, bonusCount]);
      });
  }
}

module.exports = LottoAdjustment;
