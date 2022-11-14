const { LOTTO_NUMBER } = require("./utils/Constants");
const { LOTTO_ERROR_MESSAGE, NUMBER_ERROR_MESSAGE } = require("./utils/Message");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get lottoNumber() {
    return this.#numbers;
  }

  validate(numbers) {
    this.validLength(numbers);
    this.validOverlap(numbers);
    this.validFormat(numbers);
    this.validRange(numbers);
  }

  validLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER.count) {
      throw new Error(LOTTO_ERROR_MESSAGE.lottoNumberCount);
    }
  }

  validOverlap(numbers) {
    const lottoNumbersSet = new Set(numbers);

    if (lottoNumbersSet.size !== numbers.length) {
      throw new Error(LOTTO_ERROR_MESSAGE.lottoOverlap);
    }
  }

  validFormat(numbers) {
    const reg = /^[0-9]+$/;

    numbers.forEach((item) => {
      if (!reg.test(item)) {
        throw new Error(NUMBER_ERROR_MESSAGE.numberFormat);
      }
    })
  }

  validRange(numbers) {
    numbers.forEach((item) => {
      if (item < LOTTO_NUMBER.minimum || LOTTO_NUMBER.maximum < item) {
        throw new Error(LOTTO_ERROR_MESSAGE.lottoNumberRange);
      }
    })
  }
}

module.exports = Lotto;
