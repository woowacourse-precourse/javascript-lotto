const { Console } = require("@woowacourse/mission-utils");

const LOTTO_ERROR = {
  range: "[ERROR] 로또 번호는 1~45 사이여야 합니다",
  number: "[ERROR] 로또 번호는 숫자여야 합니다",
  length: "[ERROR] 로또 번호는 6개여야 합니다.",
  duplicate: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
};

class Lotto {
  #numbers; // 당첨번호

  constructor(numbers) {
    this.validateNumbers(numbers);
    this.#numbers = numbers.map((x) => Number(x));
  }

  validateNumbers(numbers) {
    if (numbers.length !== 6) {
      Console.close();
      throw new Error(LOTTO_ERROR.length);
    }
    if (numbers.find((num) => isNaN(num))) {
      Console.close();
      throw new Error(LOTTO_ERROR.number);
    }
    if (numbers.find((num) => num > 45 && num < 1)) {
      Console.close();
      throw new Error(LOTTO_ERROR.range);
    }
    if ([...new Set(numbers)].length !== numbers.length) {
      Console.close();
      throw new Error(LOTTO_ERROR.duplicate);
    }
  }
}

module.exports = Lotto;
