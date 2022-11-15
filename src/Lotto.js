const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_MESSAGE } = require("./constant/errorMessage");
const { removeDuplication, checkLottoRange } = require("./utils/validateFn");

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

    if (!checkLottoRange(numbers)) {
      throw new Error(LOTTO_MESSAGE.CHECK_RANGE);
    }
  }

  // TODO: 추가 기능 구현

  get getLotto() {
    Console.print(this.sortLottos());
    return this.#numbers;
  }

  sortLottos() {
    const sortLotto = this.#numbers.sort((a, b) => a - b);
    const lottoText = `[${sortLotto.join(", ")}]`;

    return lottoText;
  }
}

module.exports = Lotto;
