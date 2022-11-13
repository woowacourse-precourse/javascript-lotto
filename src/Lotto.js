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

  compareNumbers(winningNumbers, bonusNumber) {
    const match = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );
    const match_bonus = +this.#numbers.includes(bonusNumber);

    const match_cnt = match.length + match_bonus;

    switch (match_cnt) {
      case 3:
        return "FIFTH";
      case 4:
        return "FOURTH";
      case 5:
        return "THIRD";
      case 6:
        if (match_bonus) return "SECOND";
        return "FIRST";
      default:
        return;
    }
    // 당첨 번호와 this.#numbers를 비교하여 결과 리턴
  }
}

module.exports = Lotto;
