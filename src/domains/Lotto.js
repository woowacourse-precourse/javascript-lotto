const SixNumbersChecker = require('../services/SixNumbersChecker');
const GRADE = require('../utils/grade');
const LottoCalculator = require('../services/LottoCalculator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    SixNumbersChecker.checkSixNumbers(numbers);
  }

  calculateGradeResult({ lottos, bonus }) {
    let gradeResult = Array.from({ length: GRADE.length }, () => 0);

    lottos.forEach(ticket => {
      const grade = LottoCalculator.calculateGrade({ ticket, bonus, numbers: this.#numbers });
      gradeResult = LottoCalculator.addPrizeToGradeResult(gradeResult, grade);
    });

    return gradeResult;
  }
}

module.exports = Lotto;
