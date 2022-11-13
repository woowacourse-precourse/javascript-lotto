const DataChecker = require('../controllers/DataChecker');
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
    let grade = GRADE.total - ticket.filter(number => this.#numbers.includes(number)).length;

    if (grade >= 1) {
      grade += 1;
    }

    if (grade === GRADE.third && ticket.includes(bonus)) {
      grade = GRADE.second;
    }

    return grade;
  }
}

module.exports = Lotto;
