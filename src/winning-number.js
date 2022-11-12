const { ERROR_MASSAGE, NUMBER_LIMIT } = require('./utils/constant');

const { LOTTO_NUMBER_LENGTH_MESSAGE, POSSIBLE_LOTTO_NUMBER_MESSAGE, DUPLICATE_NUMBER_MESSAGE } =
  ERROR_MASSAGE;
const { MAX_NUMBER, MIN_NUMBER, QUANTITY } = NUMBER_LIMIT;

class WinningNumber {
  setWinningNumber(numbers) {
    WinningNumber.#winningNumberValidate(numbers);
    this.winningNumber = numbers;
  }

  setBonusNumber(number) {
    this.#bonusNumberValidate(number);
    this.bonusNumber = number;
  }

  getWinningNumber() {
    return this.winningNumber;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }

  static #winningNumberValidate(input) {
    if (new Set(input).size !== QUANTITY) {
      throw new Error(LOTTO_NUMBER_LENGTH_MESSAGE);
    }

    input.forEach((number) => {
      if (Number(number) >= MIN_NUMBER && Number(number) <= MAX_NUMBER) {
        return;
      }

      throw new Error(POSSIBLE_LOTTO_NUMBER_MESSAGE);
    });
  }

  #bonusNumberValidate(input) {
    if (this.winningNumber.includes(input)) {
      throw new Error(DUPLICATE_NUMBER_MESSAGE);
    }

    if (input.length > 2) {
      throw new Error(POSSIBLE_LOTTO_NUMBER_MESSAGE);
    }

    if (!(Number(input) >= MIN_NUMBER && Number(input) <= MAX_NUMBER)) {
      throw new Error(POSSIBLE_LOTTO_NUMBER_MESSAGE);
    }
  }
}

module.exports = WinningNumber;
