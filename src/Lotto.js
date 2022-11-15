const { MAX_LENGTH, MESSAGE } = require("./utils/Constants");
const Validation = require("./utils/Validation");

const validation = new Validation();
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
      validation.isDuplicate(numbers, item, index);
    });
  }

  validateBonus(bonus) {
    if (this.#numbers.indexOf(bonus) !== -1) {
      throw new Error("[ERROR] 보너스 번호가 중복됩니다.");
    }
  }

  matchNumber(user) {
    let count = 0;
    user.map((number) => {
      if (this.#numbers.indexOf(number) !== -1) count++;
    });
    return count;
  }
}

module.exports = Lotto;
