const { ERROR } = require('./utils/Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.checkNumber(this.#numbers);
  };

  checkNumber(numbers) {
    this.checkLength(numbers);
    this.checkRange(numbers);
    this.checkSameNumber(numbers);
    this.checkWords(numbers);
  };

  checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_LOTTO_LENGTH);
    };
  };

  checkRange(numbers) {
    const eachNumber = numbers.filter((number) => number < 1 || number > 45);
    if (eachNumber.length > 0) {
      throw new Error(ERROR.INVALID_LOTTO_RANGE);
    };
  };

  checkSameNumber(numbers) {
    const deleteRepeatedNumber = new Set(numbers);
    if (deleteRepeatedNumber.size !== 6) {
      throw new Error(ERROR.INVALID_LOTTO_RANGE);
    };
  };

  checkWords(numbers) {
    const eachWord = numbers.filter((x) => (/[^0-9]/g).test(x));
    if (eachWord.length > 0) {
      throw new Error(ERROR.INVALID_LOTTO_WORDS);
    };
  };
};

module.exports = Lotto;
