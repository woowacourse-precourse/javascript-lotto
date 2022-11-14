const GRADE = require('../utils/grade');

class LottoCalculator {
  static addPrizeToGradeResult(gradeResult, grade) {
    if (grade > GRADE.fifth) {
      return [...gradeResult];
    }

    const newGradeResult = [...gradeResult];
    newGradeResult[grade] += GRADE.prize;

    return newGradeResult;
  }

  static calculateGrade({ ticket, bonus, numbers }) {
    return LottoCalculator.#applyBonus({
      ticket,
      bonus,
      grade: LottoCalculator.#lowerSecondOrHigherGrade(
        LottoCalculator.#calculateIncorrectNumber(ticket, numbers)
      ),
    });
  }

  static #calculateIncorrectNumber(ticket, numbers) {
    return GRADE.total - ticket.filter(number => numbers.includes(number)).length;
  }

  static #lowerSecondOrHigherGrade(grade) {
    return grade >= GRADE.second ? grade + GRADE.oneStep : grade;
  }

  static #applyBonus({ ticket, bonus, grade }) {
    return grade === GRADE.third && ticket.includes(bonus) ? GRADE.second : grade;
  }
}

module.exports = LottoCalculator;
