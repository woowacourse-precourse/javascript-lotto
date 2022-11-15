const { LOTTERY_ERROR } = require("./Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkLength(numbers);
    this.checkIsDuplicated(numbers);
    this.checkIsInteger(numbers);
    this.checkRange(numbers);
    this.#numbers = numbers;
  }

  checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTERY_ERROR.LENGTH);
    }
  }

  checkIsDuplicated(numbers) {
    const lotterySet = new Set();
    numbers.forEach((number) => {
      if (lotterySet.has(number)) {
        throw new Error(LOTTERY_ERROR.DUPLICATED);
      }
      lotterySet.add(number);
    });
  }

  checkIsInteger(numbers) {
    numbers.forEach((number) => {
      if (!Number.isInteger(number)) {
        throw new Error(LOTTERY_ERROR.INTEGER);
      }
    });
  }

  checkRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(LOTTERY_ERROR.RANGE);
      }
    });
  }
}

module.exports = Lotto;
