const { Random, Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getLottoNumber() {
    let JackpotNumber = this.#numbers.split(',');
    return JackpotNumber;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const duplicateSet = new Set(numbers);
    if (numbers.length !== duplicateSet) {
      throw new Error("[ERROR] 중복된 수를 입력하면 안됩니다.")
    }
  }
}

module.exports = Lotto;
