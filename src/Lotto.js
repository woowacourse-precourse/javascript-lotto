const { ERR_MESSAGE } = require("./constant/constant");
const getValidate = require("./Validate");

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
  }
}

module.exports = Lotto;
