const LottoCalculator = require('./LottoCalculator');

const { LOTTO_AMOUNT } = require('../../utils/constants');

class LottoIncomeDomain extends LottoCalculator {
  #income;

  constructor(inputs) {
    super(inputs);

    this.#income = '';
    this.#calculateIncome();
  }

  getResult() {
    return this.#income;
  }

  #roundUpFor() {
    this.#income = Math.round(
      (LOTTO_AMOUNT.reduce((acc, moneyUnit, index) => {
        return acc + moneyUnit * this.getLottoCountScore()[index];
      }, 0) /
        this.payment.getMoney()) *
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
}

module.exports = LottoIncomeDomain;
