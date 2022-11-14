const {LOTTO, ERROR} = require("../Constants")

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
    if([...new Set(numbers.split(""))].length !==6){
      throw new Error(ERROR.LOTTO_DUPLICATE)
    }
    numbers.forEach((number) => {
      if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
        throw new Error(ERROR.LOTTO_RANGE);
      }
    });
  }

  get numbers() {
    return [...this.#numbers];
  }
}

module.exports = Lotto;
