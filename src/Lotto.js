const { LOTTO_LENGTH, ERROR } = require("./constant/lotto");
const Utils = require("./utils/utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.utils = new Utils();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (this.isNotVaildLength(numbers)) {
      this.utils.throwError(ERROR.NOT_SIX_NUMBERS);
    }
    if (this.isNotDiffNumbers(numbers)) {
      this.utils.throwError(ERROR.DUPLICATE_NUMBERS);
    }

    const orderedNumbers = numbers.sort((a, b) => a - b);
    if (
      this.isNotInVaildRange(orderedNumbers[0]) ||
      this.isNotInVaildRange(orderedNumbers[5])
    ) {
      this.utils.throwError(ERROR.NOT_IN_VAILD_RANGE);
    }
  }

  isNotVaildLength(numbers) {
    return numbers.length !== LOTTO_LENGTH;
  }

  isNotDiffNumbers(numbers) {
    const numberSet = new Set(numbers);
    return numberSet.size !== LOTTO_LENGTH;
  }

  isNotInVaildRange(number) {
    return !(+number > 0 && +number <= 45);
  }

  get() {
    return this.#numbers;
  }

  setBonusNum(number) {
    if (this.isNotInVaildRange(number)) {
      this.utils.throwError(ERROR.NOT_IN_VAILD_RANGE);
    }
    this.#numbers.push(number);
  }
}

module.exports = Lotto;
