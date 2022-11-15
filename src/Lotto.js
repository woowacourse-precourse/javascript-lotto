const {
  checkDuplicate,
  checkLength,
  checkLottoRange,
  checkNumberRange,
  checkBonusDuplicate,
} = require("./LottoValidation");
class Lotto {
  #numbers = {
    winning: [],
    bonus: null,
  };

  constructor(winningNumbers) {
    const winning = winningNumbers.map((number) => Number(number));
    Lotto.validate(winning);
    this.#numbers = { winning };
  }

  static validate(number) {
    checkLength(number);
    checkLottoRange(number);
    checkDuplicate(number);
  }
  static validate_Bonus(number, winningNumbers) {
    checkNumberRange(number);
    checkBonusDuplicate(number, winningNumbers);
  }
  setBonusNumber(bonusNumber) {
    Lotto.validate_Bonus(bonusNumber, this.#numbers.winning);

    this.#numbers.bonus = bonusNumber;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
