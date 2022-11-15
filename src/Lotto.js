const Checker = require("./Utils/Checker.js");
const Counter = require("./utils/Counter.js");
const Question3 = require("./mainLogic/Question3.js");

class Lotto {
  #numbers;

  constructor(numbers, ticket, spendMoney) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.getBonusNumber(ticket, spendMoney);
  }

  validate(numbers) {
    const checker = new Checker();

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    checker.isOverlapping(numbers);
    checker.isRightRangeNumber(numbers);
  }

  getBonusNumber(ticket, spendMoney) {
    const matchingResult = this.getResult(ticket);
    const question3 = new Question3(this.#numbers, matchingResult, spendMoney);
  }

  getResult(ticket) {
    const counter = new Counter(this.#numbers, ticket);
    return counter.matchingResult;
  }
}

module.exports = Lotto;
