const { MESSAGE_ACCORDING_ERROR } = require("../constants/Message");
const { LOTTO_INFO, MATH_INFO } = require("../constants/Value");

class Validator {
  static winnigLottoNumberValidator(winningNumber, bonusNumber) {
    this.#isWinningNumberValid(winningNumber);
    this.#isBonusNumberValid(winningNumber, bonusNumber);
  }

  static isInputMoneyValid(numbers) {
    if (this.#isInputless(numbers))
      throw Error(MESSAGE_ACCORDING_ERROR.NOT_INPUTTED);
    if (this.#isNegativeNumber(numbers))
      throw Error(MESSAGE_ACCORDING_ERROR.NOT_POSITIVE_NUMBER);
    if (this.#isNotConsistOnlyNumber(numbers))
      throw Error(MESSAGE_ACCORDING_ERROR.TYPE);
    if (this.#isNotDividedThousand(numbers))
      throw Error(MESSAGE_ACCORDING_ERROR.NOT_THOUSAND_UNIT);
  }

  static isLottoSetValid(lottoList) {
    if (this.#hasDuplicatedValue(lottoList)) return false;
    return true;
  }

  static #isWinningNumberValid(winningNumber) {
    if (this.#isLengthNotEqualsSix(winningNumber))
      throw Error(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_LENGTH_SIX);
    if (this.#isIncludeNotNumber(winningNumber))
      throw Error(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_NUMBER);
    if (this.#isNotRangeValid(winningNumber))
      throw Error(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_RANGE);
    if (this.#isDuplicatedValueExist(winningNumber))
      throw Error(MESSAGE_ACCORDING_ERROR.LOTTO_NOT_DUPLICATED);
  }

  static #isBonusNumberValid(winningNumber, bonusNumber) {
    if (this.#isBonusLengthOverOne(bonusNumber))
      throw Error(MESSAGE_ACCORDING_ERROR.BONUS_LENGTH_OVER_ONE);
    if (this.#isBonusNotNumber(bonusNumber))
      throw Error(MESSAGE_ACCORDING_ERROR.BONUS_TYPE_NOT_NUMBER);
    if (this.#isBonusAlreadyInWinNumber(winningNumber, bonusNumber))
      throw Error(MESSAGE_ACCORDING_ERROR.BONUS_ALREADY_EXISTED);
    if (this.#isBonusRangeValid(bonusNumber))
      throw Error(MESSAGE_ACCORDING_ERROR.BONUS_OUT_OF_RANGE);
  }

  static #isBonusLengthOverOne(bonusNumber) {
    return bonusNumber.length > 1;
  }

  static #isBonusNotNumber(bonusNumber) {
    return isNaN(+bonusNumber);
  }

  static #isBonusAlreadyInWinNumber(winningNumber, bonusNumber) {
    return winningNumber.includes(bonusNumber);
  }

  static #isBonusRangeValid(bonusNumber) {
    return bonusNumber > 45 || bonusNumber < 1;
  }

  static #isNotRangeValid(numbers) {
    return numbers.some(
      (number) => number < LOTTO_INFO.MIN_VALUE || number > LOTTO_INFO.MAX_VALUE
    );
  }

  static #isLengthNotEqualsSix(numbers) {
    return numbers.length !== LOTTO_INFO.WINNING_LOTTO_LENGTH;
  }

  static #isDuplicatedValueExist(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  static #isIncludeNotNumber(numbers) {
    return numbers.includes(NaN);
  }

  static #hasDuplicatedValue(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  static #isNotDividedThousand(input) {
    return (
      input === MATH_INFO.STRING_ZERO ||
      input % LOTTO_INFO.LEAST_LOTTO_PURCHASED_PRICE !== MATH_INFO.INT_ZERO
    );
  }

  static #isInputless(input) {
    return !input;
  }

  static #isNotConsistOnlyNumber(input) {
    return /[^0-9]/g.test(input);
  }

  static #isNegativeNumber(input) {
    return +input < MATH_INFO.INT_ZERO;
  }
}

module.exports = { Validator };
