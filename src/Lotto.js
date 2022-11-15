const { INPUT_MESSAGE } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(INPUT_MESSAGE.lottoNumError);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(INPUT_MESSAGE.overlapNumError);
    }

    numbers.map((number) => {
      if (!(Number(number) >= 1 && Number(number) <= 45)) throw new Error(INPUT_MESSAGE.overlapBonusNumError);
      this.filterNumber(number);
    });
  }

}

module.exports = Lotto;
