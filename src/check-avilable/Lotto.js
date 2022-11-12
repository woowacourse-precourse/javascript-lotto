// const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require('../utils/Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.checkNumber(this.#numbers);
  };

  checkNumber(numbers) {
    const numberList = numbers.split(',');
    this.checkLength(numberList);
    this.checkRange(numberList);
    this.checkSameNumber(numberList);
    this.checkWords(numbers);
  };

  checkLength(numberList) {
    if (numberList.length !== 6) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_LOTTO_LENGTH}`);
    }
  }

  checkRange(numberList) {
    numberList.forEach(eachNumber => {
      if (eachNumber < 1 || eachNumber > 45) {
        throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_LOTTO_RANGE}`);
      }
    });
  };

  checkSameNumber(numberList) {
    const deleteRepeatedNumber = new Set(numberList)
    if (deleteRepeatedNumber.size !== 6) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_LOTTO_RANGE}`);
    }
  }

  checkWords(numbers) {
    if (numbers.match(/[^0-9,]/g) !== null) {
      throw new Error(`${ERROR.ERROR_MESSAGE}${ERROR.INVALID_LOTTO_WORDS}`);
    }
  }
}

module.exports = Lotto;
