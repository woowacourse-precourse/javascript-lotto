const LottoNumber = require('./model/LottoNumber');
const Validator = require('./model/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map((number) => {
      const lottoNumber = new LottoNumber(number);
      return lottoNumber.value;
    }).sort((a, b) => a - b);
  }

  validate(numbers) {
    Validator.validateNumbersLength(numbers);
    Validator.validateUnique(numbers);
  }

  get numbers() {
    return [...this.#numbers];
  }
}

module.exports = Lotto;
