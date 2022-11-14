const { RULE, ERROR } = require("./constants.js");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (this.isNotSixNumber(numbers)) {
      throw new Error(ERROR.NOT_SIX_NUMBER);
    }
    if (this.isDuplicateNumber(numbers)) {
      throw new Error(ERROR.DUPLICATE_NUMBER);
    }
    if (this.isOverNumberInRange(numbers)) {
      throw new Error(ERROR.IS_OVER_NUMBER_IN_RANGE);
    }
    if (this.isUnderNumberInRange(numbers)) {
      throw new Error(ERROR.IS_UNDER_NUMBER_IN_RANGE);
    }

    if (this.containsBlanks(numbers)) {
      throw new Error(ERROR.IS_UNDER_NUMBER_IN_RANGE);
    }

    if (this.containsCharacter(numbers)) {
      throw new Error(ERROR.IS_UNDER_NUMBER_IN_RANGE);
    }
  }

  isNotSixNumber(numbers) {
    return numbers.length !== RULE.SELECT_NUMBER;
  }

  isDuplicateNumber(numbers) {
    return new Set(numbers).size !== numbers.length;
  }

  isOverNumberInRange(numbers) {
    return numbers.some((number) => {
      return number > RULE.MAX_NUMBER;
    });
  }

  isUnderNumberInRange(numbers) {
    return numbers.some((number) => {
      return number < RULE.MIN_NUMBER;
    });
  }

  containsBlanks(numbers) {
    return numbers.includes(" ");
  }

  containsCharacter(numbers) {
    return numbers.some((number) => {
      return isNaN(number);
    });
  }
}

module.exports = Lotto;
