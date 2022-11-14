const { Console } = require("@woowacourse/mission-utils");
const { FORMAT, GRADE, LOTTO } = require("./constant/constant");


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
  }

  get numbers() {
    return this.#numbers;
  }

  print() {
    Console.print(
      FORMAT.LOTTO_PRINT.FIRST 
      + this.numbers.join(FORMAT.LOTTO_PRINT.SEPARATOR) 
      + FORMAT.LOTTO_PRINT.LAST
    );
  }

  hasBonusNumber(bonusNumber) {
    return this.numbers.includes(bonusNumber);
  }

  countDuplicateNumber(winningNumber) {
    return this.numbers
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
    return 'none';
  }
}

module.exports = Lotto;
