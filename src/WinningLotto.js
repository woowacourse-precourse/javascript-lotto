const { ERROR } = require('./Constants');

class WinningLotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.lengthValidity(numbers);
    this.duplicateCheck(numbers);
    this.isValidScope(numbers);
    this.isValidType(numbers);
  }

  lengthValidity(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LESS_NUMBER);
    }
  }

  duplicateCheck(numbers) {
    const removeDuplicate = new Set(numbers);

    if (removeDuplicate.size !== numbers.length) {
      throw new Error(ERROR.DUPLICATED_NUMBER);
    }
  }

  isValidScope(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR.SCOPE_OUT);
      }
    });
  }

  isValidType(numbers) {
    numbers.forEach((number) => {
      if (!new RegExp('^[0-9]+$').test(number)) {
        throw new Error(ERROR.TYPE);
      }
    });
  }

  isValidBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(ERROR.SAME_NUMBER);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR.SCOPE_OUT);
    }
    if (!new RegExp('^[0-9]+$').test(bonusNumber)) {
      throw new Error(ERROR.TYPE);
    }
    return true;
  }
}

module.exports = WinningLotto;
