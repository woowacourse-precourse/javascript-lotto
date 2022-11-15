const { ERR_MESSAGE } = require("./constant/constant");
const Validate = require("./Validate");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERR_MESSAGE.ERR_LOTTO_NUM_LENGHT);
    }
    const set = new Set(numbers);
    if (set.size !== 6) {
      throw new Error(ERR_MESSAGE.ERR_LOTTO_OVERLAP_VALUE);
    }
  }
}

module.exports = Lotto;
