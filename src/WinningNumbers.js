const { ERROR } = require('../src/lib/constants/error');
const { LOTTO } = require('../src/lib/constants/lotto');

class WinningNumbers {
  #winningNumbers;
  #bonusNumber;

  initWinningNumbers(winningNumbersInput) {
    const winningNumbers = winningNumbersInput.split(',');

    this.validateWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers.map(winningNumber =>
      parseInt(winningNumber, 10),
    );
  }

  validateWinningNumbers(winningNumbers) {
    switch (true) {
      case this.hasNotNumber(winningNumbers):
        throw new Error(ERROR.WINNING_NUMBERS.NOT_NUMBER);
      case this.isNotLottoLength(winningNumbers):
        throw new Error(ERROR.WINNING_NUMBERS.NOT_LOTTO_LENGTH);
      case this.hasOutOfBoundNumber(winningNumbers):
        throw new Error(ERROR.WINNING_NUMBERS.OUT_OF_BOUND);
      case this.hasDuplicate(winningNumbers):
        throw new Error(ERROR.WINNING_NUMBERS.DUPLICATE);
    }
  }

  hasNotNumber(winningNumbers) {
    return winningNumbers.some(winningNumber =>
      this.isNotNumber(winningNumber),
    );
  }

  isNotLottoLength(winningNumbers) {
    return winningNumbers.length !== LOTTO.NUMBER_COUNT;
  }

  hasOutOfBoundNumber(winningNumbers) {
    return winningNumbers.some(
      winningNumber =>
        parseInt(winningNumber, 10) < LOTTO.MIN_NUMBER_LIMIT ||
        parseInt(winningNumber, 10) > LOTTO.MAX_NUMBER_LIMIT,
    );
  }

  hasDuplicate(winningNumbers) {
    return winningNumbers.length !== new Set(winningNumbers).size;
  }

  initBonusNumber(bonusNumberInput) {
    this.validateBonusNumber(bonusNumberInput);
    this.#bonusNumber = parseInt(bonusNumberInput, 10);
  }

  validateBonusNumber(bonusNumberInput) {
    switch (true) {
      case this.isNotNumber(bonusNumberInput):
        throw new Error(ERROR.BONUS_NUMBER.NOT_NUMBER);
      case this.isOutOfBound(parseInt(bonusNumberInput, 10)):
        throw new Error(ERROR.BONUS_NUMBER.OUT_OF_BOUND);
      case this.isDuplicateWinningNumber(parseInt(bonusNumberInput, 10)):
        throw new Error(ERROR.BONUS_NUMBER.DUPLICATE);
    }
  }

  isNotNumber(numberInput) {
    return !/^\d+$/g.test(numberInput);
  }

  isOutOfBound(number) {
    return number < LOTTO.MIN_NUMBER_LIMIT || number > LOTTO.MAX_NUMBER_LIMIT;
  }

  isDuplicateWinningNumber(number) {
    return this.#winningNumbers.includes(number);
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = WinningNumbers;
