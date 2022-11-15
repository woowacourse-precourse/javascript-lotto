const { MESSAGE_ACCORDING_ERROR } = require("../constants/message");
const { LOTTO_INFO, NUMBER_TYPE } = require("../constants/value");

class Lotto {
  #winningNumbers;
  constructor(numbers) {
    numbers[NUMBER_TYPE.WINNING_NUMBER] = this.#setConvertedWinningLottoNumber(
      numbers[NUMBER_TYPE.WINNING_NUMBER]
    );
    this.validate(numbers[NUMBER_TYPE.WINNING_NUMBER]);
    this.#winningNumbers = numbers;
  }

  getConvertedLottoNumber() {
    return this.#winningNumbers;
  }

  validate(numbers) {
    if (this.#isLengthNotEqualsSix(numbers))
      throw Error(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_LENGTH_SIX);
    if (this.#isIncludeNotNumber(numbers)) throw Error(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_NUMBER);
    if (this.#isNotRangeValid(numbers)) throw Error(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_RANGE);
    if (this.#isDuplicatedValueExist(numbers))
      throw Error(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_DUPLICATED);
  }

  #isNotRangeValid(numbers) {
    return numbers.some((number) => number < LOTTO_INFO.MIN_VALUE || number > LOTTO_INFO.MAX_VALUE);
  }

  #isLengthNotEqualsSix(numbers) {
    return numbers.length !== LOTTO_INFO.WINNING_LOTTO_LENGTH;
  }

  #setConvertedWinningLottoNumber(numbers) {
    return this.#setSplittedNumber(numbers);
  }

  #setSplittedNumber(numbers) {
    return Array.from(numbers.split(","), this.#convertArgsStringToInt);
  }

  #isDuplicatedValueExist(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  #convertArgsStringToInt(number) {
    return +number;
  }

  #isIncludeNotNumber(numbers) {
    return numbers.includes(NaN);
  }
}

module.exports = Lotto;
