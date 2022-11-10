const { LOTTO, ERROR } = require('./constructor.js');
const { throwErrorMessage } = require('./utils.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map(number => parseInt(number));
  }

  validate(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throwErrorMessage(ERROR.OUT_OF_LOTTO_LENGTH);
    }

    const unduplicatedNums = new Set(numbers);
    if (unduplicatedNums.size != numbers.length) {
      throwErrorMessage(ERROR.DUPLICATE_NUMBERS);
    }

    const notNumberInputs = numbers.filter(number => isNaN(number));
    if (notNumberInputs.length != 0) {
      throwErrorMessage(ERROR.ONLY_NUMBER);
    }

    const outOfRangeNumbers = numbers.filter(value => {
      const number = parseInt(value);
      return number < LOTTO.MIN || number > LOTTO.MAX;
    })
    if (outOfRangeNumbers.length != 0) {
      throwErrorMessage(ERROR.OUT_OF_NUMEBR_RANGE);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
