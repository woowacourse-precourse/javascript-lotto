const { MAX_LENGTH, MESSAGE } = require("./utils/Constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLength(numbers);
    this.validateDuplicate(numbers);
    this.#numbers = numbers;
  }

  validateLength(numbers) {
    if (numbers.length !== MAX_LENGTH) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateDuplicate(numbers) {
    numbers.map((item, index) => {
      if (numbers.indexOf(item) !== index)
        throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    });
  }

  validateBonus(bonus) {
    if (this.#numbers.indexOf(bonus) !== -1) {
      throw new Error("[ERROR] 보너스 번호가 중복됩니다.");
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
