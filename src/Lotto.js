const { Console } = require("@woowacourse/mission-utils");
const { FORMAT, GRADE } = require("./constant/constant");
const Validator = require("./Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validator = new Validator();
    this.validator.checkLotto(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  print() {
    Console.print(
      FORMAT.LOTTO_PRINT.FIRST 
      + this.getNumbers().join(FORMAT.LOTTO_PRINT.SEPARATOR) 
      + FORMAT.LOTTO_PRINT.LAST
    );
  }

  hasBonusNumber(bonusNumber) {
    return this.getNumbers().includes(bonusNumber);
  }

  countDuplicateNumber(winningNumber) {
    return this.getNumbers()
      .filter(number => winningNumber.includes(number))
      .length;
  }
  
  getRank(winningNumber, bonusNumber) {
    const duplicateCount = this.countDuplicateNumber(winningNumber);
    if (duplicateCount === GRADE.FIRST.DUPLICATE_COUNT) return GRADE.FIRST.NAME;
    if (
      this.hasBonusNumber(bonusNumber) 
      && duplicateCount === GRADE.SECOND.DUPLICATE_COUNT
    ) {
      return GRADE.SECOND.NAME;
    }
    if (duplicateCount === GRADE.THIRD.DUPLICATE_COUNT) return GRADE.THIRD.NAME;
    if (duplicateCount === GRADE.FOURTH.DUPLICATE_COUNT) return GRADE.FOURTH.NAME;
    if (duplicateCount === GRADE.FIFTH.DUPLICATE_COUNT) return GRADE.FIFTH.NAME;
  }
}

module.exports = Lotto;
