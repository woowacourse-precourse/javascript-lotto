const { NUMBER_TYPE } = require("../constants/Value");
const { Validator } = require("../utils/Validator");

class Lotto {
  #winningNumbers;
  constructor(numbers) {
    numbers[NUMBER_TYPE.WINNING_NUMBER] = this.#setConvertedWinningLottoNumber(
      numbers[NUMBER_TYPE.WINNING_NUMBER]
    );
    this.#validate(numbers);
    this.#winningNumbers = numbers;
  }

  getConvertedLottoNumber() {
    return this.#winningNumbers;
  }

  #validate(numbers) {
    Validator.winnigLottoNumberValidator(
      numbers[NUMBER_TYPE.WINNING_NUMBER],
      numbers[NUMBER_TYPE.BONUS_NUMBER]
    );
  }

  #setConvertedWinningLottoNumber(numbers) {
    return this.#setSplittedNumber(numbers);
  }

  #setSplittedNumber(numbers) {
    return Array.from(numbers.split(","), this.#convertArgsStringToInt);
  }

  #convertArgsStringToInt(number) {
    return +number;
  }
}

module.exports = Lotto;
