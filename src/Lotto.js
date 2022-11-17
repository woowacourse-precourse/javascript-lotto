const { CONSTANT, ERROR_MESSAGE } = require("./Utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== CONSTANT.LOTTO_LENGTH)
      throw new Error(ERROR_MESSAGE.LOTTO.INVALID_LENGTH);
    if (numbers.filter((number) => isNaN(number)).length > 0)
      throw new Error(ERROR_MESSAGE.LOTTO.NAN);
    if (
      numbers.filter(
        (number) => numbers.indexOf(number, numbers.indexOf(number) + 1) !== -1
      ).length > 0
    )
      throw new Error(ERROR_MESSAGE.LOTTO.DUPLICATE);
    if (
      numbers.filter(
        (number) =>
          number < CONSTANT.LOTTO_RANGE_START || number > CONSTANT.LOTTO_RANGE_END
      ).length > 0
    )
      throw new Error(ERROR_MESSAGE.LOTTO.OVER_RANGE);
    if (numbers.filter((number) => !Number.isInteger(number)).length > 0)
      throw new Error(ERROR_MESSAGE.LOTTO.NOT_INTEGER);
  }

  get numbers() {
    return this.#numbers;
  }
}
module.exports = Lotto;
