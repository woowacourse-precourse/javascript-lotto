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
    const result = Array.from({ length: 7 }, () => 0);

    tickets.forEach(ticket => {
      const grade = this.#calculateGrade(ticket, bonus);
      result[grade] += 1;
    });

    return result;
  }

  // 6   0   6 - 6 = 0
  // 5+b 1   6 - 5 = 1 2
  // 5   2   6 - 5 = 1 2
  // 4   3   6 - 4 = 2 3
  // 3   4   6 - 3 = 3 4
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
