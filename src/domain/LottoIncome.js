const LottoCalculator = require('./LottoCalculator');

const { LOTTO_AMOUNT } = require('../../utils/constants');

class LottoIncome extends LottoCalculator {
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

  #checkDecimalPoint() {
    if (this.#income[this.#income.length - 1] === '0') {
      return `${Number(this.#income).toLocaleString('ko-KR')}.0`;
    }

    return Number(this.#income).toLocaleString('ko-KR');
  }

  #calculateIncome() {
    this.#income = this.#roundUpFor()
      .#makeDecimalFirst()
      .#checkDecimalPoint();
  }
}

module.exports = LottoIncome;
