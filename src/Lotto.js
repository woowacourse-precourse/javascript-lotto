const { validateWiningNumber } = require("./utils/validator");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validateWiningNumber(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  isWin(winningNumbers, bonusNumber) {
    // 당첨 번호와 this.#numbers를 비교하여 결과 리턴
    console.log(winningNumbers); // 당첨 번호
  }
}

module.exports = Lotto;
