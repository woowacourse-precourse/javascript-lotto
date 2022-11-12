const { rest } = require('./utils/calculator');
const { ERROR_MESSAGES } = require('./common/messages');
const { LOTTO_INFO } = require('./common/constants');

class Validator {
  static checkValidMoney(money) {
    if (!Number(money) || money === ' ') {
      throw new Error(`${ERROR_MESSAGES.INVALID_PURCHASE}`);
    }
    if (rest(money) > 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_REST_MONEY}`);
    }
    if (money.includes('e') || Number.isNaN(Number(money))) {
      throw new Error(`${ERROR_MESSAGES.INVALID_NOT_MONEY}`);
    }
  }

  static checkValidLottoLength(lotto) {
    if (lotto.length > `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_COUNT}`);
    }
  }

  static checkDuplicateNumber(lotto) {
    const removalDuplicateNumber = [...new Set(lotto)];
    if (String(removalDuplicateNumber.length) !== `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.DUPLICATE_NUMBER}`);
    }
  }

  static checkWinNumbers(winNumbers) {
    const checkList = [
      this.#checkValidWinNumbers,
      this.#checkWinNumbersLenght,
      this.#checkWinNumbersRange,
    ];
    checkList.forEach((checkValid) => {
      checkValid(winNumbers);
    });
  }

  static #checkValidWinNumbers(winNumbers) {
    const removalSeparatorNumbers = winNumbers.split(',').join('');
    const isNotNumber = Number.isNaN(Number(removalSeparatorNumbers));
    if (isNotNumber) {
      throw new Error(`${ERROR_MESSAGES.INVALID_INPUT}`);
    }
  }

  static #checkWinNumbersLenght(winNumbers) {
    const splitNumberLength = winNumbers.split(',').length;
    if (String(splitNumberLength) !== `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_COUNT}`);
    }
  }

  static #checkWinNumbersRange(winNumbers) {
    const splitNumber = winNumbers.split(',');
    splitNumber.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE}`);
      }
    });
  }
}

module.exports = Validator;
