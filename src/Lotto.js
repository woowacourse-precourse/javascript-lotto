const MissionUtils = require("@woowacourse/mission-utils");
const messages = require("./constants/messages.js");
const terms = require("./constants/terms");

class Lotto {
  #numbers;
  constructor(numbers) {
    this.#numbers = this.validate(numbers);
  }

  getWinningNumbers() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }

  createBonusNumber(number) {
    const { result, errorMessage } = this.checkBonusNumber(number);
    try {
      if (!result) {
        throw new Error(errorMessage);
      }
    } catch (e) {
      MissionUtils.Console.close();
      MissionUtils.Console.print(errorMessage);
    }
  }

  checkBonusNumber(number) {
    if (isNaN(number)) {
      return {
        result: false,
        errorMessage: messages.NOT_A_NUMBER_ERROR,
      };
    }
    this.bonusNumber = [parseInt(number)];
    if (!this.checkLottoLength(this.bonusNumber, terms.BONUS_NUMBER_LENGTH)) {
      return {
        result: false,
        errorMessage: messages.BONUS_NUMBER_LENGTH_ERROR,
      };
    }
    if (!this.checkLottoIsNumber(this.bonusNumber)) {
      return { result: false, errorMessage: messages.NOT_A_NUMBER_ERROR };
    }
    if (!this.checkNumberRange(this.bonusNumber)) {
      return { result: false, errorMessage: messages.NUMBER_RANGE_ERROR };
    }
    if (!this.checkWinningNumberBonusNumber()) {
      return {
        result: false,
        errorMessage: messages.BONUS_NUMBER_IN_WINNING_NUMBERS_ERROR,
      };
    }
    return { result: true };
  }

  checkWinningNumberBonusNumber() {
    if (
      this.#numbers.filter((number) => number === parseInt(this.bonusNumber[0]))
        .length === terms.BONUS_NUMBER_LENGTH
    ) {
      return false;
    }
    return true;
  }

  validate(number) {
    if (!this.checkLottoIsNumber(number)) {
      throw new Error(messages.NOT_A_NUMBER_ERROR);
    }
    if (!this.checkSameNumber(number, terms.NUMBERS_LENGTH)) {
      throw new Error(messages.SAME_NUMBER_ERROR);
    }
    if (!this.checkLottoLength(number, terms.NUMBERS_LENGTH)) {
      throw new Error(messages.TOTAL_NUMBER_ERROR);
    }
    if (!this.checkNumberRange(number)) {
      throw new Error(messages.NUMBER_RANGE_ERROR);
    }
    return number;
  }

  checkLottoLength(lotto, lottoLength) {
    if (lotto.length !== lottoLength) {
      return false;
    }
    return true;
  }

  checkLottoIsNumber(lotto) {
    if (lotto.every((number) => isNaN(number))) {
      return false;
    }
    return true;
  }
  checkSameNumber(lotto) {
    const numberSet = new Set(lotto);
    if (numberSet.size !== terms.NUMBERS_LENGTH) {
      return false;
    }
    return true;
  }
  checkNumberRange(lotto) {
    if (
      !lotto.every(
        (number) =>
          terms.MIN_NUMBER_RANGE <= number && number <= terms.MAX_NUMBER_RANGE
      )
    ) {
      return false;
    }
    return true;
  }
}

module.exports = Lotto;
