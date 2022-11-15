const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const {MESSAGE, LOTTO} = require("./constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sort(numbers);
  }

  get numbers() {
    return this.#numbers;
  }

  validate(numbers) {
    const numberSet = new Set(numbers);

    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(MESSAGE.ERROR.LOTTO_LENGTH);
    }

    if (numberSet.size !== numbers.length) {
      throw new Error(MESSAGE.ERROR.NUMBER_DUPLICATE);
    }
  }

  sort(numbers) {
    return numbers.sort((a, b) => a - b);
  }

}

module.exports = Lotto;
