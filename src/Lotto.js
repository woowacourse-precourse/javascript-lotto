const { LOTTO_LENGTH, ERROR } = require("./constant/lotto");
const Utils = require("./utils/utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.utils = new Utils();
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber;
  }

  validate(numbers) {
    this.isNotVaildLength(numbers);
    this.isNotDiffNumbers(numbers);

    const orderedNumbers = numbers.sort((a, b) => a - b);
    this.isNotInVaildRange(orderedNumbers[0]);
    this.isNotInVaildRange(orderedNumbers[5]);
  }

  isNotVaildLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH)
      this.utils.throwError(ERROR.NOT_SIX_NUMBERS);
  }

  isNotDiffNumbers(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.size !== LOTTO_LENGTH)
      this.utils.throwError(ERROR.DUPLICATE_NUMBERS);
  }

  isNotInVaildRange(number) {
    if (!(+number > 0 && +number <= 45))
      this.utils.throwError(ERROR.NOT_IN_VAILD_RANGE);
  }

  getWinningNumbers() {
    return this.#numbers;
  }

  setBonusNumber(number) {
    this.isNotInVaildRange(number);
    this.bonusNum = number;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

module.exports = Lotto;
