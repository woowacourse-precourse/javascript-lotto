const { Random, Console } = require("@woowacourse/mission-utils");

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
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error("[ERROR] 로또 번호가 중복되면 안됩니다.");
    }
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
    }
    this.numbers = numbers;
  }
  
  validateBonus = (bonusNumber) => {
    this.bonusNumber = Number(bonusNumber);
    if(this.numbers.includes(this.bonusNumber)) {
      throw new Error("[ERROR] 로또 번호와 중복되지 않아야 합니다.");
    }
    if (this.bonusNumber < 1 || this.bonusNumber > 45) {
      throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
    }
  }

}
module.exports = Lotto;