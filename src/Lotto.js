const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validation.validateWinningNumbers(numbers);
    this.#numbers = numbers;
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
