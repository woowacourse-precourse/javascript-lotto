const DataChecker = require('./DataChecker');
const GRADE = require('./grade');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    DataChecker.isValidSixNumbers(numbers);
  }

  calculateResult(tickets, bonus) {
    const result = Array.from({ length: 5 }, () => 0);

    tickets.forEach(ticket => {
      const grade = this.#calculateGrade(ticket, bonus);
      if (grade <= GRADE.fifth) {
        result[grade] += 1;
      }
    });

    return result;
  }

  #calculateGrade(ticket, bonus) {
    let grade = this.#calculateIncorrectNumber(ticket);
    grade = this.#shiftGrade(grade);
    grade = this.#applyBonus({ grade, ticket, bonus });

    return grade;
  }

  #calculateIncorrectNumber(ticket) {
    return GRADE.total - ticket.filter(number => this.#numbers.includes(number)).length;
  }

  #shiftGrade(grade) {
    if (grade >= GRADE.second) {
      return grade + 1;
    }

    return grade;
  }

  #applyBonus({ grade, ticket, bonus }) {
    if (grade === GRADE.third && ticket.includes(bonus)) {
      return GRADE.second;
    }

    return grade;
  }
}

module.exports = Lotto;
