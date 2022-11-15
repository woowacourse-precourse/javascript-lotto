const Random = require("@woowacourse/mission-utils").Random;
const Console = require("@woowacourse/mission-utils").Console;
const inputValidation = require("./inputValidation");
const { INPUTS } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get inputLottoNumbers() {
    return this.#numbers;
  }

  set inputLottoNumbers(value) {
    const inputArr = value.split(",").map((value) => Number(value));
    this.#numbers = inputArr;
  }

  validate(numbers) {
    const checkSixNum = inputValidation.checkSixNum(numbers);
  }
}

module.exports = Lotto;
