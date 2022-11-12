const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_MESSAGE } = require("./constant/errorMessage");
const { removeDuplication } = require("./utils/removeDuplication");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_MESSAGE.NOT_SIX_NUMBERS);
    }

    if (removeDuplication(numbers).length !== numbers.length) {
      throw new Error(LOTTO_MESSAGE.CHECK_DUPLICATION);
    }
  }

  // TODO: 추가 기능 구현

  get getLotto() {
    Console.print(this.#numbers);
    return this.#numbers;
  }
}

module.exports = Lotto;
