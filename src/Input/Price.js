const { PRICE_MEASURE } = require('../lib/Constants');
const { print } = require('../lib/Utils');
const Input = require('.');
const PriceValidation = require('../Validation/PriceValidation');

class Price extends Input {
  #lottoPrice = 0;

  #lottoCount = 0;

  constructor(answer) {
    super(answer);
    Price.validate(answer);
    this.save(answer);
  }

  static validate(answer) {
    const priceValidation = new PriceValidation(answer);
    return priceValidation.validate();
  }

  save(answer) {
    this.#lottoPrice = Number(answer);
    this.#lottoCount = this.#lottoPrice / PRICE_MEASURE;

    return this.printLottoCount();
  }

  printLottoCount() {
    return print(`\n${this.#lottoCount}개를 구매했습니다.`);
  }

  getLottoPrice() {
    return this.#lottoPrice;
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}

module.exports = Price;
