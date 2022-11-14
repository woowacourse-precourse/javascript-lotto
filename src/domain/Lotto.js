const { Random } = require("@woowacourse/mission-utils");
const LottoNumbers = require("./LottoNumber");
const LottoValidator = require("../validator/LottoValidator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const lottoValidator = new LottoValidator();
    lottoValidator.validate(numbers);
  }

  // TODO: 추가 기능 구현
  isContain(number) {
    return this.#numbers.includes(number);
  }

  isEqual(lotto) {
    return JSON.stringify(this.#numbers) === JSON.stringify(lotto.#numbers);
  }

  toString() {
    return JSON.stringify(this.#numbers);
  }
}

module.exports = Lotto;
