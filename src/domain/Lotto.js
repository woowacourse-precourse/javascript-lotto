const { Random } = require("@woowacourse/mission-utils");
const LottoNumbers = require("./LottoNumber");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
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
