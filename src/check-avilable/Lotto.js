const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require('../utils/Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.changeType(numbers)
    this.checkNumber(this.#numbers);
  };

  changeType(numbers) {
    return numbers.map((number) => Number(number))
  }

  checkNumber(numbers) {
    this.checkLength(numbers);
    this.checkRange(numbers);
    this.checkSameNumber(numbers);
    this.checkWords(numbers);
  };

  checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_LOTTO_LENGTH}`);
    }
  }

  checkRange(numbers) {
    numbers.forEach(eachNumber => {
      if (eachNumber < 1 || eachNumber > 45) {
        throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_LOTTO_RANGE}`);
      }
    });
  };

  checkSameNumber(numbers) {
    const deleteRepeatedNumber = new Set(numbers)
    if (deleteRepeatedNumber.size !== 6) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_LOTTO_RANGE}`);
    }
  }

  checkWords(numbers) {
    const eachElement = numbers.filter((number) => {toString(number).match(/[^0-9,]/g)})
    if (eachElement.length > 0) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_LOTTO_WORDS}`);
    }
    // if (numbers.includes(/[^0-9,]/g) !== null) {
    //   throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_LOTTO_WORDS}`);
    // }
  }
}

module.exports = Lotto;
