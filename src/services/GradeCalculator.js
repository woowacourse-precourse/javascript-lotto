const GRADE = require('../utils/grade');

class GradeCalculator {
  static calculate({ ticket, bonus, numbers }) {
    const grade = GradeCalculator.#lowerSecondOrHigherGrade(
      GradeCalculator.#calculateIncorrectNumber(ticket, numbers)
    );

    return GradeCalculator.#applyBonus({
      ticket,
      bonus,
      grade,
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

module.exports = GradeCalculator;
