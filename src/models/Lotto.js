const {LOTTO, ERROR} = require("../utils/Constants")

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if([...new Set(numbers)].length !== LOTTO.LENGTH){
      throw new Error(ERROR.LOTTO_DUPLICATE)
    }
    numbers.forEach((value) => {
      if (isNaN(value)) {
        throw new Error(ERROR.LOTTO_TYPE);
      }
      if (value < LOTTO.MIN_NUMBER || value > LOTTO.MAX_NUMBER) {
        throw new Error(ERROR.LOTTO_RANGE);
      }
    });
  }

  get numbers() {
    return [...this.#numbers];
  }
}

module.exports = Lotto;
